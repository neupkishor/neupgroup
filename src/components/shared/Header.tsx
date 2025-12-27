import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NeupLogo } from '@/components/NeupLogo';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <NeupLogo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Neup Group
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="#ventures"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Ventures
            </Link>
            <Link
              href="#vision"
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
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <ThemeSwitcher />
           <Button asChild>
              <Link href="#contact">Partner with us</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
