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
import type { AppProps } from 'next/app';

const geist = Geist({
  subsets: ['latin'],
});
// const { dehydratedState } = pageProps as { dehydratedState: unknown };

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <div className={geist.className}>
          <Component {...pageProps} />
        </div>
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
