import { ConsentManagerProvider } from '@c15t/nextjs';

const mode = 'offline' as const;
const colorScheme = 'dark' as const;
// const callbacks = {
//   onConsentBannerFetched: (response) => {
//     console.log('Banner state retrieved:', response.data);
//   },
//   onConsentSet: (response) => {
//     console.log('Consent preferences saved');
//   },
//   onConsentVerified: (response) => {
//     console.log('Consent verification complete');
//   },
//   onError: (error, endpoint) => {
//     console.error(`Error in ${endpoint}:`, error);
//   },
// } as const;

export default function Providers({ children }: { children: React.ReactNode }) {
  // const [mode, setMode] = React.useState<'offline' | 'c15t'>('c15t');

  // React.useEffect(() => {
  //   // Check if backend is available
  //   fetch('/api/c15t/status').catch(() => {
  //     console.warn('c15t backend unavailable, switching to offline mode');
  //     setMode('offline');
  //   });
  // }, []);

  // const options = {
  //   mode,
  //   backendURL: mode === 'c15t' ? '/api/c15t' : undefined,
  // };

  return (
    <ConsentManagerProvider
      options={{
        mode,
        react: {
          colorScheme,
        },
      }}
    >
      {children}
    </ConsentManagerProvider>
  );
}
