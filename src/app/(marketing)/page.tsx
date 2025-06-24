import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Activity, LucideCode } from 'lucide-react';
import { Button } from '~/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20]">
        <header className="w-full flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard" />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
        <main className="grid gap-8 items-center">
          <div className="flex items-center gap-px">
            <Activity className="h-8 w-8 text-primary-500" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">UptimeMonitor</h1>
          </div>
          <div className="flex items-center justify-center">
            <Button asChild>
              <Link href="/dashboard">/dashboard</Link>
            </Button>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/dbt-hackathon-titans/uptime-front"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LucideCode />
            <span>GitHub</span>
          </a>
        </footer>
      </div>
    </div>
  );
}
