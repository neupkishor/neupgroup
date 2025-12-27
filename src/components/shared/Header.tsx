
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { NeupLogo } from '@/components/NeupLogo';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { ventures } from '@/components/sections/VenturePortfolio.config';

export function Header() {
  const pathname = usePathname();

  const getHeaderTitle = () => {
    if (pathname === '/neupid') {
      return 'NeupID';
    }
    if (pathname === '/foundation') {
      return 'Neup.Foundation';
    }

    const currentVenture = ventures.find(v => v.link === pathname);
    if (currentVenture) {
      return currentVenture.name;
    }

    return 'Neup Group';
  };

  const headerTitle = getHeaderTitle();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <NeupLogo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              {headerTitle}
            </span>
          </Link>
        </div>

        {/* Center Section: Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/#ventures"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Ventures
          </Link>
          <Link
            href="/#vision"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Vision
          </Link>
          <Link
            href="/about/teams"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Team
          </Link>
          <Link
            href="/#contact"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Contact
          </Link>
        </nav>

        {/* Right Section: Actions */}
        <div className="flex items-center justify-end space-x-2">
           <ThemeSwitcher />
           <Button asChild>
              <Link href="/neupid">Get Inside</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
