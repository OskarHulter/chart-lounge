import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { defaultPlaywrightConfig } from './src/lib/config';
require('dotenv').config();

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  ...defaultPlaywrightConfig,
  updateSnapshots: 'all',
});
