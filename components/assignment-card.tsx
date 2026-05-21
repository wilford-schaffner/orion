import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar03Icon } from "@hugeicons/core-free-icons"

import { ClassIcon } from "@/components/class-icon"
import { MemberAvatarStack } from "@/components/member-avatar-stack"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import type { Assignment } from "@/lib/mock-data"

export function AssignmentCard({ assignment }: { assignment: Assignment }) {
  return (
    <Link href={`/assignments/${assignment.id}`} className="block">
      <Card className="flex flex-col gap-0 overflow-visible border border-foreground/10 p-0 ring-0 transition-colors hover:bg-accent/50">
        <CardContent className="space-y-3 pt-6 pb-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex min-w-0 items-center gap-3">
              <ClassIcon classCode={assignment.classCode} size="sm" />
              <CardDescription className="line-clamp-2">
                {assignment.className}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="shrink-0 gap-1">
              <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
              {assignment.dueLabel}
            </Badge>
          </div>
          <CardTitle className="line-clamp-2">
            {assignment.assignmentName}
          </CardTitle>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {assignment.description}
          </p>
        </CardContent>
        <CardFooter className="mt-auto flex min-h-14 w-full items-center justify-between border-t bg-muted/50 py-4 [.border-t]:py-4">
          <span className="text-sm font-medium text-muted-foreground">
            {assignment.groupCount} Groups
          </span>
          <MemberAvatarStack
            headshots={assignment.memberHeadshots}
            extraCount={assignment.extraMemberCount}
          />
        </CardFooter>
      </Card>
    </Link>
  )
}
