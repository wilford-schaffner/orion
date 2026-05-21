import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function PageHeader({
  backHref,
  backLabel,
  title,
  description,
  className,
}: {
  backHref: string
  backLabel: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("space-y-4", className)}>
      <Button variant="outline" size="sm" className="-ml-2 w-fit" asChild>
        <Link href={backHref}>
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            strokeWidth={2}
            data-icon="inline-start"
          />
          {backLabel}
        </Link>
      </Button>
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description ? (
          <p className="text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
