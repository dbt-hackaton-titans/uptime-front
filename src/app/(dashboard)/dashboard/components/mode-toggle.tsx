'use client';

import { useCallback } from 'react';
import { IconBrightness } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

import { Button } from '~/components/ui/button';

const DARK = 'dark';
const LIGHT = 'light';

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === DARK ? LIGHT : DARK);
  }, [resolvedTheme, setTheme]);

  return (
    <Button variant="secondary" size="icon" className="group/toggle size-8" onClick={toggleTheme}>
      <IconBrightness />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
