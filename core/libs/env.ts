import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {},

  server: {
    APP_NAME: z.string(),
    NODE_ENV: z.enum(["development", "production"]),
    DATABASE_URL: z.string()
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    APP_NAME: process.env.APP_NAME,
    DATABASE_URL: process.env.DATABASE_URL
  }
});
