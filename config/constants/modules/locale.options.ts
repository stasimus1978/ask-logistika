import { UserLocale } from "@prisma/client";

/**
 * Метадані для локалізації.
 * Використовуються для зберігання інформації про локаль,
 * які можуть бути використані уза допомогою next-intl, dayjs.
 */
const options = {
  cookieNameSuffix: `user-locale`,

  defaultLocale: UserLocale.UK,

  values: [
    { code: UserLocale.UK, currency: "UAH", timezone: "Europe/Kyiv", locale: "uk-UA" },
    { code: UserLocale.RU, currency: "RUB", timezone: "Europe/Moscow", locale: "ru-RU" },
    { code: UserLocale.EN, currency: "USD", timezone: "America/New_York", locale: "en-US" }
  ]
} as const;

/**
 * Константи для локалізації.
 */
export const localeOptions = { ...options };
