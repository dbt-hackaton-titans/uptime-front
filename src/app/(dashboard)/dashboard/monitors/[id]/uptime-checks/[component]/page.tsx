import { DashboardShell } from '~/app/(dashboard)/dashboard/components/shell';
import { DashboardHeader } from '~/app/(dashboard)/dashboard/components/header';
import { MonitorCreateButton } from '~/app/(dashboard)/dashboard/components/monitor-create-button';
import { fetchMonitorById, fetchUptimeChecks } from '~/app/actions/monitors';
import { Button } from '~/components/ui/button';
import Link from 'next/link';

export default async function UptimeChecksPage({ params }: { params: Promise<{ id: number, component: number }> }) {
  // Assuming you want to fetch a specific monitor by ID, you might need to pass the ID as a parameter.
  // For example, if you have a monitor ID, you can fetch it like this:
  const { id, component } = await params;
  const monitor = await fetchMonitorById(id)
  const uptimeChecks = await fetchUptimeChecks();

  const checks = uptimeChecks.filter((check: any) => check.systemId === monitor.id);

  return (
    <DashboardShell>
      <DashboardHeader name={monitor.name} text={monitor.description}>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/monitors/${monitor.id}`} passHref>Back</Link>
          </Button>
        </div>
      </DashboardHeader>
      <div className="grid gap-10 px-4 lg:px-6">
        {/* You can add more components or details related to the monitor here */}
        {checks.length > 0 ? (
          <div className="grid gap-4">
            {checks.map((component:any) => (
              <div key={component.id} className="p-4 bg-gray-100 rounded-lg shadow">
                <h3 className="text-lg font-semibold">{component.name}</h3>
                <p>{component.checkUrl}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No components found for this monitor.</p>
        )}
      </div>
    </DashboardShell>
  );
}
