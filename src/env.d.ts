/// <reference path="../.astro/types.d.ts" />

interface importMetaEnv {
  NASA_API_KEY: string;
  NASA_DEMO_KEY: string;
  CRON_URL: string;
  GREETING: string;
}

interface ImportMeta {
  readonly env: importMetaEnv;
}
