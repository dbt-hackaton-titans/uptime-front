'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { cn } from '~/lib/utils';
import { Button, buttonVariants } from '~/components/ui/button';
import { Icons } from '~/app/(dashboard)/dashboard/components/icons';
import { VariantProps } from 'class-variance-authority';

type Props = {
  variant?: VariantProps<typeof buttonVariants>['variant'];
};

export function MonitorCreateButton({ variant }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleClick() {
    setIsLoading(true);

    const response = await fetch('/api/monitors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Untitled Monitor',
      }),
    });

    setIsLoading(false);

    if (!response?.ok) {
      if (response.status === 402) {
        return toast.warning('Limit of 3 posts reached.', {
          description: 'Please upgrade to the PRO plan.',
          className: '!text-amber-600',
        });
      }

      return toast.error('Something went wrong.', {
        description: 'Your post was not created. Please try again.',
        className: '!text-red-600',
      });
    }

    const monitor = await response.json();

    // This forces a cache invalidation.
    router.refresh();

    router.push(`/monitor/${monitor.id}`);
  }

  const styles = {
    'cursor-not-allowed opacity-60': isLoading,
  };

  return (
    <Button className={cn(styles)} variant={variant} onClick={handleClick} disabled={isLoading}>
      {isLoading ? <Icons.Spinner className="h-4 w-4 animate-spin" /> : <Icons.Add className="h-4 w-4" />}
      Add Monitor
    </Button>
  );
}
