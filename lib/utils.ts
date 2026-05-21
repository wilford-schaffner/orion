import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function classCodeInitial(code: string) {
  return code.charAt(0).toUpperCase()
}

export function headshotsForMembers(initials: string[]): string[] {
  return initials.map((initial, index) => {
    const num = ((initial.charCodeAt(0) + index) % 17) + 1
    return `/images/headshots/headshot_${String(num).padStart(2, "0")}.jpg`
  })
}
