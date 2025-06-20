import type React from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import { cn } from '~/lib/utils';
import { fontVariables } from '~/lib/fonts';
import { ActiveThemeProvider } from '~/components/active-theme';
import { ThemeProvider } from '~/components/theme-provider';
import { Toaster } from '~/components/ui/sonner';

import './globals.css';

export const metadata: Metadata = {
  title: 'UptimeMonitor | Service Status Dashboard',
  description: 'Monitor your services and track uptime with real-time status updates',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ cssLayerName: 'clerk' }}>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={cn(
            'text-foreground group/body overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]',
            fontVariables
          )}
        >
          <ActiveThemeProvider>
            <ThemeProvider>
              {children}
              <Toaster position="bottom-right" />
            </ThemeProvider>
          </ActiveThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
