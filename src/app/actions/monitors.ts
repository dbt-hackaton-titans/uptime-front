'use server';

import { monitors } from '~/app/datasets';

export async function fetchMonitors() {
  // TODO: Implement the actual API call to fetch monitors
  await new Promise(resolve => setTimeout(resolve, 1000));

  return monitors;
}

export async function fetchLatestMonitors() {
  // TODO: Implement the actual API call to fetch the latest monitors
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return the latest monitors, assuming they are the first 5 in the dataset
  return monitors.slice(0, 5);
}

export async function fetchMonitorById(id: string) {
  // TODO: Implement the actual API call to fetch a monitor by ID
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Find the monitor by ID
  const monitor = monitors.find(m => m.id === id);

  if (!monitor) {
    throw new Error(`Monitor with ID ${id} not found`);
  }

  return monitor;
}
