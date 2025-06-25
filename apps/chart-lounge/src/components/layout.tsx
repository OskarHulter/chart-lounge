import Providers from '@/components/providers';
import { ConsentManagerDialog, CookieBanner } from '@c15t/nextjs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <main className="app">
        {children}
        <CookieBanner />
        <ConsentManagerDialog />
      </main>
    </Providers>
  );
}
