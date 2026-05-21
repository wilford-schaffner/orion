import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  BookOpen01Icon,
  Folder01Icon,
  Note01Icon,
  TestTube01Icon,
  UserGroupIcon,
  VolumeOffIcon,
} from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import type { Category } from "@/lib/mock-data"

const categoryIcons: Record<Category["icon"], IconSvgElement> = {
  "exam-prep": BookOpen01Icon,
  quiet: VolumeOffIcon,
  collab: UserGroupIcon,
  homework: Note01Icon,
  lab: TestTube01Icon,
  project: Folder01Icon,
}

export function CategoryChip({ category }: { category: Category }) {
  const icon = categoryIcons[category.icon]

  return (
    <Badge variant="outline" className="h-9 gap-2 px-3 text-sm font-normal">
      <span className="flex size-6 items-center justify-center rounded-full bg-muted">
        <HugeiconsIcon icon={icon} strokeWidth={2} className="size-3.5" />
      </span>
      {category.label}
    </Badge>
  )
}
