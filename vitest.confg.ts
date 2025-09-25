import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: ['apps/*', 'libs/*', 'tests/*/vitest.config.{e2e,unit}.ts'],
  },
});
