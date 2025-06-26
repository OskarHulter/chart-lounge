export const c15tOfflineConfig = {
  mode: 'offline',
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
