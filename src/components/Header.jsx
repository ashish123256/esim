'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

 
  if (pathname !== '/dashboard' && pathname !== '/recharge') {
    return null;
  }

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold flex items-center gap-2">
        eSIM Manager
      </h1>
      <button className="text-gray-600 hover:underline">Logout</button>
    </header>
  );
}
