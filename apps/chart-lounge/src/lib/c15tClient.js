// lib/c15tClient.js
import { createClient } from '@c15t/react';

const config = {
  mode: process.env.NODE_ENV === 'development' ? 'offline' : 'c15t',
  backendURL:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_C15T_URL
      : undefined,
  react: {
    // Components will only be light mode
    colorScheme: 'dark',
  },
  // Optional: Add callback functions for various events
  callbacks: {
    onConsentBannerFetched: (response) => {
      console.log('Banner state retrieved:', response.data);
    },
    onConsentSet: (response) => {
      console.log('Consent preferences saved');
    },
    onConsentVerified: (response) => {
      console.log('Consent verification complete');
    },
    onError: (error, endpoint) => {
      console.error(`Error in ${endpoint}:`, error);
    },
  },
};

export const c15tClient = createClient(config);
