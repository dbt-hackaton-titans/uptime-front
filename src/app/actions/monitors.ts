'use server';

const endpoint = process.env.NEXT_PUBLIC_API_URL;

export async function fetchMonitors() {
  const response = await fetch(`${endpoint}/api/system`, {});

  return response.json();
}

export async function fetchLatestMonitors() {
  const response = await fetch(`${endpoint}/api/system`, {});

  return await response.json();
}

export async function fetchMonitorById(id: number) {
  const response = await fetch(`${endpoint}/api/system/${id}`, {});

  return await response.json();
}

export async function fetchUptimeChecks() {
  const response = await fetch(`${endpoint}/api/uptimecheck`, {});

  return await response.json();
}

export async function fetchUptimeChecksById(id: number) {
  const response = await fetch(`${endpoint}/api/uptimecheck/${id}`, {});

  return await response.json();
}

export async function fetchUptimeCheckEvents() {
  const response = await fetch(`${endpoint}/api/uptimeevents/by-check`, {});

  return await response.json();
}
