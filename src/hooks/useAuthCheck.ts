
import { useState, useEffect } from 'react';

export function useAuthCheck() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            // Helper to get cookie value
            const getCookie = (name: string) => {
                if (typeof document === 'undefined') return null;
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop()?.split(';').shift();
                return null;
            };

            const accountId = getCookie('auth_account_id');
            const sessionId = getCookie('auth_session_id');
            const sessionKey = getCookie('auth_session_key');

            // Check if all required cookies exist
            setIsAuthenticated(!!(accountId && sessionId && sessionKey));
            setLoading(false);
        };

        checkAuth();
    }, []);

    return { isAuthenticated, loading };
}
