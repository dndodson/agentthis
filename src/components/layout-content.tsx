'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/src/components/sections/navbar-site';
import { Footer } from '@/src/components/sections/footer';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isApp = pathname.startsWith('/app');

  return (
    <>
      {!isApp && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!isApp && <Footer />}
    </>
  );
}
