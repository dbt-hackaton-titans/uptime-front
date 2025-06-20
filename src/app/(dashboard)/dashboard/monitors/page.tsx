import { DashboardShell } from '~/app/(dashboard)/dashboard/components/shell';
import { DashboardHeader } from '~/app/(dashboard)/dashboard/components/header';
import { MonitorCreateButton } from '~/app/(dashboard)/dashboard/components/monitor-create-button';

export default function MonitorsPage() {
  return (
    <DashboardShell>
      <DashboardHeader name="Monitors" text="Manage your monitors and keep track of their status.">
        <div className="flex items-center gap-2">
          <MonitorCreateButton variant="outline" />
        </div>
      </DashboardHeader>
      <div className="grid gap-10"></div>
    </DashboardShell>
  );
}
