import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Activity, LucideCode } from 'lucide-react';

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
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex items-center gap-px">
            <Activity className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">UptimeMonitor</h1>
          </div>
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{' '}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
          </ol>
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
