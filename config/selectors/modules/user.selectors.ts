import { Prisma } from "@prisma/client";

/**
 * Базовий селектор даних користувача.
 * Використовується для типізації даних користувача.
 */
export const userBaseSelect = Prisma.validator<Prisma.UserSelect>()({
  id: true,

  username: true,

  locale: true,
  theme: true,
  status: true,

  createdAt: true
});

/**
 * Базовий тип користувача.
 * Використовується для типізації основних даних користувача.
 */
export type UserBaseSelectType = Prisma.UserGetPayload<{ select: typeof userBaseSelect }>;
