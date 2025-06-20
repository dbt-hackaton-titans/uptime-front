import type React from 'react';

import { cookies } from 'next/headers';
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar';

import { AppSidebar } from '~/app/(dashboard)/dashboard/components/app-sidebar';
import { SiteHeader } from '~/app/(dashboard)/dashboard/components/site-header';

import '~/app/(dashboard)/dashboard/theme.css';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const sidebarState = cookieStore.get(SIDEBAR_COOKIE_NAME)?.value ?? 'true';
  const sidebarIsOpen = Boolean(sidebarState);

  const sidebarStyle = {
    '--sidebar-width': 'calc(var(--spacing) * 72)',
  };

  return (
    <SidebarProvider defaultOpen={sidebarIsOpen} style={sidebarStyle as React.CSSProperties}>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
