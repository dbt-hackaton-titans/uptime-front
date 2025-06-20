import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { fetchLatestIncidents } from '~/app/actions/incidents';
import Link from 'next/link';

export async function SectionIncidents() {
  const incidents = await fetchLatestIncidents();

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Recent Incidents</CardTitle>
        <CardDescription>Latest service disruptions and maintenance</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        {incidents.map(incident => (
          <Link key={incident.id} href={`/incidents/${incident.id}`} className="rounded-lg hover:bg-accent">
            <div className="border rounded-lg px-3 py-2">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-sm">{incident.title}</h4>
                <Badge variant={incident.status === 'ongoing' ? 'destructive' : 'secondary'} className="text-xs">
                  {incident.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Started {incident.started}
                {incident.duration && ` • Duration: ${incident.duration}`}
              </p>
              <div className="flex flex-wrap gap-1">
                {incident.affected.map(service => (
                  <Badge key={service} variant="outline" className="text-xs">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
