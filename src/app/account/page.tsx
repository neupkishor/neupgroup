
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Access Account',
    description: 'Login to your Neup.Group account.',
};

export default function AccountPage() {
    return (
        <div className="container relative flex min-h-[calc(100vh-56px)] flex-col items-center justify-center lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <Link
                        href="/"
                        className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </Link>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Account Access
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your credentials to continue
                    </p>
                </div>
                <Card className="border-border/50 bg-background/60 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Sign In</CardTitle>
                        <CardDescription>
                            Use your Neup.Account to access the dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="name@neup.group" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button className="w-full">Sign In</Button>
                        <div className="text-center text-sm text-muted-foreground">
                            <Link href="/account/reset" className="hover:text-primary underline underline-offset-4">
                                Forgot password?
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
