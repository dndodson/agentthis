'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/src/app/navbar';
import { Footer } from '@/src/app/footer';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';

  return (
    <>
      {!isDashboard && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!isDashboard && <Footer />}
    </>
  );
}
