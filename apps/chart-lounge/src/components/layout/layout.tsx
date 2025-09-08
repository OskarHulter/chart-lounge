import React from 'react';
import { Header, Footer } from '@/components/sections';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
