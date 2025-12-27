
import { Github, Twitter, Linkedin } from 'lucide-react';
import { NeupLogo } from '@/components/NeupLogo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t py-12 bg-card">
      <div className="container max-w-screen-2xl">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center mb-4">
              <NeupLogo className="h-8 w-8 mr-2 text-primary" />
              <h3 className="text-xl font-headline font-bold">Neup Group</h3>
            </div>
            <p className="text-muted-foreground">
              Building the next generation of digital ventures from Nepal, for the world.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Ventures</h4>
              <ul className="space-y-2">
                <li><Link href="/tourio" className="text-muted-foreground hover:text-primary">Tourio</Link></li>
                <li><Link href="/marketing" className="text-muted-foreground hover:text-primary">Neup Marketing</Link></li>
                <li><Link href="/mail" className="text-muted-foreground hover:text-primary">Neup Mail</Link></li>
                <li><Link href="/design" className="text-muted-foreground hover:text-primary">Neup Design</Link></li>
                <li><Link href="/jobs" className="text-muted-foreground hover:text-primary">Neup Jobs</Link></li>
                <li><Link href="/socials" className="text-muted-foreground hover:text-primary">Neup Socials</Link></li>
                <li><Link href="/neupid" className="text-muted-foreground hover:text-primary">NeupID</Link></li>
                <li><Link href="/legis" className="text-muted-foreground hover:text-primary">Neup.Legis</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Katalyst</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about/teams" className="text-muted-foreground hover:text-primary">Team</Link></li>
                <li><Link href="/jobs" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                <li><Link href="/legal" className="text-muted-foreground hover:text-primary">Legal</Link></li>
                <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Partnerships</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary"><Github /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Neup Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
