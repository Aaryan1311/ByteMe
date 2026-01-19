// this function is used to safty merge or create conditional tailwind classes.
// if not careful then override or create something that we didn't intend to do.

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
