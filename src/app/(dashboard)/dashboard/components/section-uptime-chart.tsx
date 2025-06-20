import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';

export function SectionUptimeChart() {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>30-Day Uptime</CardTitle>
        <CardDescription>Daily uptime percentage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Main Website</span>
            <span className="text-green-600">99.9%</span>
          </div>
          <Progress value={99.9} className="h-2" />

          <div className="flex justify-between text-sm">
            <span>API Server</span>
            <span className="text-green-600">99.5%</span>
          </div>
          <Progress value={99.5} className="h-2" />

          <div className="flex justify-between text-sm">
            <span>Database</span>
            <span className="text-red-600">98.2%</span>
          </div>
          <Progress value={98.2} className="h-2" />

          <div className="flex justify-between text-sm">
            <span>CDN</span>
            <span className="text-yellow-600">99.1%</span>
          </div>
          <Progress value={99.1} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}
