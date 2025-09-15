/**
 * Константи для конфігурації.
 * Використовуються для зберігання інформації про локаль,
 * які можуть бути використані уза допомогою next-intl, dayjs.
 */
import { localeOptions } from "./modules/locale.options";
import { themeOptions } from "./modules/theme.options";

export const constants = {
  // Налаштування локалізації
  locale: localeOptions,

  // Налаштування теми
  theme: themeOptions
} as const;
