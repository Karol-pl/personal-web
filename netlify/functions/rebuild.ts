import type { Config } from "@netlify/functions";

const URL = process.env.CRON_URL;

export default async (req: Request) => {
  const { next_run } = await req.json();
  if (URL) {
    await fetch(URL, { method: "POST" });
  } else {
    console.error("CRON_URL is not defined");
  }
  console.log(`next rebuild at: ${next_run}`);
};

export const config: Config = {
  schedule: "@daily",
};
