'use server';

import { incidents } from '~/app/datasets';

export async function fetchIncidents() {
  // TODO: Implement the actual API call to fetch incidents
  await new Promise(resolve => setTimeout(resolve, 1000));

  return incidents;
}

export async function fetchLatestIncidents() {
  // TODO: Implement the actual API call to fetch the latest incidents
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return the latest incidents, assuming they are the first 5 in the dataset
  return incidents.slice(0, 3);
}

export async function fetchMonitorById(id: number) {
  // TODO: Implement the actual API call to fetch a monitor by ID
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Find the monitor by ID
  const monitor = incidents.find(m => m.id === id);

  if (!monitor) {
    throw new Error(`Monitor with ID ${id} not found`);
  }

  return monitor;
}
