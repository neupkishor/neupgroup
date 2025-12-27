
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: '404: Page Not Found',
};

const funnyMessages = [
    "Looks like you've discovered a black hole in our digital universe.",
    "Are you lost, or just exploring the void?",
    "This page went on a vacation. It forgot to leave a forwarding address.",
    "We searched high and low, but this page is nowhere to be found.",
    "Oops! This is not the page you are looking for."
];

export default function NotFound() {
  const message = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.48))] text-center px-6 py-12">
        <div className="max-w-md">
            <div className="relative inline-block">
                <h1 className="text-8xl md:text-9xl font-bold font-headline text-primary">404</h1>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                    <div className="h-40 w-40 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
                </div>
            </div>
          <h2 className="mt-6 text-2xl md:text-3xl font-semibold">Page Not Found</h2>
          <p className="mt-4 text-muted-foreground">
            {message}
          </p>
          <Button asChild className="mt-8">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Homepage
            </Link>
          </Button>
        </div>
    </div>
  );
}
