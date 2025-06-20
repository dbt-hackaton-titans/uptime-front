import { SignIn } from '@clerk/nextjs';
import { Activity } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Link href="/public" className="flex items-center">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">UptimeMonitor</span>
            </Link>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Monitor your services and track uptime</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <SignIn
            appearance={{
              elements: {
                card: 'shadow',
                headerTitle: 'hidden',
                headerSubtitle: 'hidden',
                logoBox: 'hidden',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
