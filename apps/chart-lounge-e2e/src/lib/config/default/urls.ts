export const PROD_URL = 'https://oskarhulter.com';
export const STAGING_URL = 'https://chart-lounge.com';
export const LOCAL_URL = 'http://localhost:3000';
export const CI_URL = 'http://localhost:8080';
export const ALLOWED_URL = LOCAL_URL || CI_URL || STAGING_URL || PROD_URL;

export const DEV_URL = process.env.CI ? CI_URL : LOCAL_URL;
export const BASE_URL = process.env['BASE_URL'] || DEV_URL;
