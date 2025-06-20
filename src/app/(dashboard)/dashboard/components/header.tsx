import type React from 'react';

interface DashboardHeaderProps {
  name: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({ name, text, children }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 lg:px-6 pt-4 lg:pt-6">
      <div className="grid gap-1">
        <h1 className="font-heading text-3xl md:text-4xl">{name}</h1>
        {text && <p className="text-lg text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  );
}
