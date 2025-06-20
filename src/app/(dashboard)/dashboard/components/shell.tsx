import * as React from 'react';

import { cn } from '~/lib/utils';

type DashboardShellProps = React.HTMLAttributes<HTMLDivElement>;

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className={cn('@container/main flex flex-1 flex-col gap-2', className)} {...props}>
      {children}
    </div>
  );
}
