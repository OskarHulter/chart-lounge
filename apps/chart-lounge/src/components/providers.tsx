import { ConsentManagerProvider } from '@c15t/nextjs';
import { c15tClient } from '../lib/c15tClient';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState('c15t');

  React.useEffect(() => {
    // Check if backend is available
    fetch('/api/c15t/status').catch(() => {
      console.warn('c15t backend unavailable, switching to offline mode');
      setMode('offline');
    });
  }, []);

  const options = {
    mode,
    backendURL: mode === 'c15t' ? '/api/c15t' : undefined,
  };

  return (
    <ConsentManagerProvider options={{ ...c15tClient, ...options }}>
      {children}
    </ConsentManagerProvider>
  );
}
