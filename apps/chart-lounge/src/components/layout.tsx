import { Footer } from '@/components/footer/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <div className="root">
        {children}
        <Footer />
      </div>
    </body>
  );
}
