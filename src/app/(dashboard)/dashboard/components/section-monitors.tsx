import type React from 'react';
import Link from 'next/link';
import { IconAlertTriangle, IconCircleCheck, IconClock, IconGlobe, IconX } from '@tabler/icons-react';

import { fetchLatestMonitors } from '~/app/actions/monitors';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';

const statusIcons: Record<string, React.ReactNode> = {
  up: <IconCircleCheck className="h-4 w-4 text-green-500" />,
  down: <IconX className="h-4 w-4 text-red-500" />,
  warning: <IconAlertTriangle className="h-4 w-4 text-yellow-500" />,
  unknown: <IconClock className="h-4 w-4 text-gray-500" />,
};

const getStatusIcon = (status: string) => statusIcons[status] || statusIcons.unknown;

const statusBadges: Record<string, React.ReactNode> = {
  up: <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Operational</Badge>,
  down: <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Down</Badge>,
  warning: <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Degraded</Badge>,
  unknown: <Badge variant="secondary">Unknown</Badge>,
};

const getStatusBadge = (status: string) => statusBadges[status] || statusBadges.unknown;

export async function SectionMonitors() {
  const monitors = await fetchLatestMonitors();

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Monitors</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">Total for the last 3 months</span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {monitors.map((monitor: any) => (
            <Link key={monitor.id} href={`/monitors/${monitor.id}`} className="block">
              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(monitor.status)}
                  <div>
                    <h3 className="font-medium">{monitor.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <IconGlobe className="h-3 w-3" />
                      <span>{monitor.description}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  {getStatusBadge(monitor.status)}
                  <div className="text-xs text-gray-500">
                    {monitor.status !== 'down' && <span>{monitor.responseTime}ms • </span>}
                    {monitor.uptime}% uptime
                  </div>
                  <div className="text-xs text-gray-400">Last checked {monitor.lastChecked}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
