"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Search01Icon,
  Settings01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons"

import { ThemeLogo } from "@/components/theme-logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <ThemeLogo />
        <div className="relative min-w-0 flex-1">
          <HugeiconsIcon
            icon={Search01Icon}
            strokeWidth={2}
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search assignments, groups..."
            className="w-full pl-9"
            readOnly
            aria-label="Search"
          />
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Settings">
            <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Profile">
            <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
          </Button>
        </div>
      </div>
    </header>
  )
}
