"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface UserProfile {
    name: {
        firstName: string;
        lastName: string;
    };
    username: string;
    photo: string;
}

interface SessionContextType {
    user: UserProfile | null;
    loading: boolean;
    isAuthenticated: boolean;
    refreshSession: () => Promise<void>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const SESSION_STORAGE_KEY = "neup_user_session";

export function SessionProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchSession = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://neupgroup.com/account/bridge/api/v1/profile/signed-info",
                {
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();

                if (data.error === "unauthenticated" || !data.username) {
                    // User is not authenticated
                    setUser(null);
                    sessionStorage.removeItem(SESSION_STORAGE_KEY);
                } else {
                    // User is authenticated
                    const userProfile: UserProfile = {
                        name: data.name,
                        username: data.username,
                        photo: data.photo,
                    };
                    setUser(userProfile);
                    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(userProfile));
                }
            } else {
                setUser(null);
                sessionStorage.removeItem(SESSION_STORAGE_KEY);
            }
        } catch (error) {
            console.error("Failed to fetch session:", error);
            // On error, we might want to keep the existing session or clear it.
            // For safety, let's clear it if we can't verify.
            // Or maybe we just don't update state if network fails?
            // Let's fallback to clearing for now to be safe.
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // 1. Check Session Storage first for immediate visual feedback (if valid)
        const storedSession = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (storedSession) {
            try {
                const parsed: UserProfile = JSON.parse(storedSession);
                setUser(parsed);
                setLoading(false); // We have data, so stop loading visually
            } catch (e) {
                console.error("Error parsing session storage", e);
            }
        }

        // 2. Always fetch fresh data to validate session and update storage
        // This ensures that if the cookie expired, we catch it.
        fetchSession();
    }, []);

    return (
        <SessionContext.Provider
            value={{
                user,
                loading,
                isAuthenticated: !!user,
                refreshSession: fetchSession,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
}
