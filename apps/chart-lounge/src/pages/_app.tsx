import React from 'react';
import 'temporal-polyfill/global';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type AppType } from 'next/dist/shared/lib/utils';
import { Geist } from 'next/font/google';
import '@/styles/globals.css';
import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner,
} from '@c15t/nextjs/pages';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const geist = Geist({
  subsets: ['latin'],
});
// const { dehydratedState } = pageProps as { dehydratedState: unknown };

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <ConsentManagerProvider
      initialData={pageProps.initialC15TData}
      options={{
        mode: 'c15t',
        backendURL: '/api/c15t',
        consentCategories: ['necessary', 'marketing'],
        ignoreGeoLocation: true,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <div className={geist.className}>
            <CookieBanner />
            <ConsentManagerDialog />
            <Component {...pageProps} />
          </div>
        </HydrationBoundary>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ConsentManagerProvider>
  );
};

export default MyApp;
