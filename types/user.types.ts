import type { Prisma, UserLocale, UserStatus, UserTheme } from "@prisma/client";

import type { selectors } from "@/config/selectors";

/**
 * Базовий тип користувача.
 * Використовується для типізації основних даних користувача.
 */
export type UserType = Prisma.UserGetPayload<{ select: typeof selectors.user.base }>;

/**
 * Тип локалізації користувача.
 */
export type LocaleType = UserLocale;

/**
 * Тип теми користувача.
 */
export type ThemeType = UserTheme;

/**
 * Тип статусу користувача.
 */
export type StatusType = UserStatus;
