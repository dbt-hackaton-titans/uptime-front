import { DashboardShell } from '~/app/(dashboard)/dashboard/components/shell';
import { DashboardHeader } from '~/app/(dashboard)/dashboard/components/header';
import { SectionCards } from '~/app/(dashboard)/dashboard/components/section-cards';
import { SectionMonitors } from '~/app/(dashboard)/dashboard/components/section-monitors';
import { SectionIncidents } from '~/app/(dashboard)/dashboard/components/section-incidents';
import { SectionUptimeChart } from '~/app/(dashboard)/dashboard/components/section-uptime-chart';
import { currentUser } from '@clerk/nextjs/server';

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <DashboardShell>
      <DashboardHeader
        name={`Welcome back, ${user?.firstName}`}
        text="Monitor your services and stay informed about their status."
      />
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6 grid grid-cols-1 @xl/main:grid-cols-4 @4xl/main:grid-cols-6 @5xl/main:grid-cols-12 gap-4">
          <div className="@xl/main:col-span-full @4xl/main:col-span-4 @5xl/main:col-span-8">
            <SectionMonitors />
          </div>
          <div className="grid gap-4 @xl/main:col-span-full @4xl/main:col-span-2 @5xl/main:col-span-4">
            <SectionIncidents />
            <SectionUptimeChart />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
