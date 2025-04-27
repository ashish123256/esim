'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname !== '/dashboard' && pathname !== '/recharge') {
    return null;
  }

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold flex items-center gap-2">
        eSIM Manager
      </h1>
      <button 
        className="text-gray-600 hover:underline" 
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}
