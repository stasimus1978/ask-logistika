import { UserTheme } from "@prisma/client";

/**
 * Метадані для теми.
 * Використовуються для зберігання інформації про тему,
 */
const options = {
  cookieNameSuffix: `theme`,

  defaultTheme: UserTheme.LIGHT,

  values: [
    { code: UserTheme.LIGHT, label: "Light" },
    { code: UserTheme.DARK, label: "Dark" }
  ]
} as const;

/**
 * Константи для теми.
 */
export const themeOptions = { ...options };
