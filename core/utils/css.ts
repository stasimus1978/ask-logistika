import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Об'єднує класи Tailwind і clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}