# Система керування військовими запасами (ЗСУ)

> Next.js (App Router) + TypeScript + TailwindCSS + Prisma  
> Внутрішня система обліку та логістики для військових підрозділів.

---

## `🛠️ 01 - Ініціалізація та налаштування проєкту`

### 1. Налаштовано оточення розробки

Встановлені основні залежності для форматування, лінтингу та стилізації:

```bash
# Dev-залежності

# Форматування коду (Prettier)
pn add -D prettier @trivago/prettier-plugin-sort-imports prettier-plugin-tailwindcss

# Лінтинг (ESLint + плагіни)
pn add -D @next/eslint-plugin-next eslint-config-prettier @eslint/js
pn add -D eslint-plugin-react-hooks @typescript-eslint/eslint-plugin
pn add -D @typescript-eslint/parser eslint-plugin-import eslint-plugin-react

# TailwindCSS і плагіни
pn add -D tailwindcss @tailwindcss/forms tw-animate-css

# Інші стилі та утиліти
pn add -D sass

# Runtime-залежності
pn add @t3-oss/env-nextjs zod react-icons framer-motion zustand

# Оновлення усіх компонентів до latest-версій
pn up --latest
```

### 2. Налаштовані інструменти розробки:

- **Prettier** — форматування коду (плагіни: сортування імпортів, підтримка `TailwindCSS`).
- **ESLint** — лінтинг для `Next.js`, `TypeScript`, `React Hooks`.
- **Аліаси** — налаштовані шляхи в `tsconfig.json`.
- **Ігнор-файли** — додані `.prettierignore` та `.gitignore`.

### 3. Налаштована система змінних середовища.

Файл `/core/libs/env.ts` забезпечує типобезпечну роботу з змінними середовища:

- **Валідація** — використання `@t3-oss/env-nextjs` та `zod` для перевірки змінних
- **Типізація** — автоматичне створення TypeScript типів для змінних середовища
- **Розділення** — окремі налаштування для клієнтської та серверної частини
- **Безпека** — перевірка наявності обов'язкових змінних під час збірки

---
