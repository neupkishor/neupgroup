
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { NeupLogo } from '@/components/NeupLogo';

const navLinks = [
  { href: '/#ventures', label: 'Ventures' },
  { href: '/#vision', label: 'Vision' },
  { href: '/about/teams', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="p-0 h-full w-full bg-background/95 backdrop-blur-sm">
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
                 <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <NeupLogo className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Neup.Group</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close navigation menu</span>
                </Button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-8">
                 <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        className="text-2xl font-semibold text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                        >
                        {link.label}
                        </Link>
                    ))}
                </nav>
                <Button asChild className="mt-12 w-full max-w-xs" size="lg" onClick={() => setIsOpen(false)}>
                    <Link href="/neupid">Get Inside</Link>
                </Button>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
