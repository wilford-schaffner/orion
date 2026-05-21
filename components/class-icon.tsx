import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  Atom01Icon,
  Calculator01Icon,
  CoinsDollarIcon,
  Dna01Icon,
  Globe02Icon,
  HierarchyIcon,
  Idea01Icon,
} from "@hugeicons/core-free-icons"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import type { ClassItem } from "@/lib/mock-data"

type ClassVisualKey = ClassItem["id"] | "econ" | "phys"

const classCodeToKey: Record<string, ClassVisualKey> = {
  DTR: "dtr",
  HIST: "hist",
  MATH: "math",
  CS: "cs",
  BIO: "bio",
  ECON: "econ",
  PHYS: "phys",
}

const classVisuals: Record<
  ClassVisualKey,
  { icon: IconSvgElement; className: string }
> = {
  dtr: {
    icon: Idea01Icon,
    className:
      "border-amber-500/50 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  hist: {
    icon: Globe02Icon,
    className: "border-sky-500/50 bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  math: {
    icon: Calculator01Icon,
    className:
      "border-indigo-500/50 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  cs: {
    icon: HierarchyIcon,
    className:
      "border-violet-500/50 bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  bio: {
    icon: Dna01Icon,
    className:
      "border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  econ: {
    icon: CoinsDollarIcon,
    className:
      "border-rose-500/50 bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
  phys: {
    icon: Atom01Icon,
    className:
      "border-orange-500/50 bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
}

const classIconVariants = cva(
  "flex shrink-0 items-center justify-center rounded-full border",
  {
    variants: {
      size: {
        sm: "size-8",
        default: "size-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const iconSizeVariants = cva("", {
  variants: {
    size: {
      sm: "size-4",
      default: "size-5",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

function resolveClassKey({
  classId,
  classCode,
}: {
  classId?: ClassItem["id"]
  classCode?: string
}): ClassVisualKey {
  if (classId) return classId
  if (classCode) {
    return classCodeToKey[classCode.toUpperCase()] ?? "dtr"
  }
  return "dtr"
}

export function ClassIcon({
  classId,
  classCode,
  size,
  className,
}: {
  classId?: ClassItem["id"]
  classCode?: string
  size?: VariantProps<typeof classIconVariants>["size"]
  className?: string
}) {
  const key = resolveClassKey({ classId, classCode })
  const { icon, className: colorClassName } = classVisuals[key]

  return (
    <span
      className={cn(classIconVariants({ size }), colorClassName, className)}
    >
      <HugeiconsIcon
        icon={icon}
        strokeWidth={2}
        className={iconSizeVariants({ size })}
      />
    </span>
  )
}
