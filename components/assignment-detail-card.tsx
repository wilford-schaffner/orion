"use client"

import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar03Icon, Tick02Icon } from "@hugeicons/core-free-icons"

import { AvailabilityViewDrawer } from "@/components/availability-view-drawer"
import { ClassIcon } from "@/components/class-icon"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import {
  getStoredAvailability,
  type StoredAvailability,
} from "@/lib/availability"
import type { Assignment } from "@/lib/mock-data"

const completeStorageKey = (id: string) => `orion-assignment-complete:${id}`

export function AssignmentDetailCard({
  assignment,
  availabilityHref,
}: {
  assignment: Assignment
  availabilityHref: string
}) {
  const [isComplete, setIsComplete] = React.useState(false)
  const [hasAvailability, setHasAvailability] = React.useState(false)
  const [viewOpen, setViewOpen] = React.useState(false)
  const [savedAvailability, setSavedAvailability] =
    React.useState<StoredAvailability | null>(null)

  React.useEffect(() => {
    setIsComplete(localStorage.getItem(completeStorageKey(assignment.id)) === "true")
    const saved = getStoredAvailability(assignment.id)
    setSavedAvailability(saved)
    setHasAvailability(saved !== null)
  }, [assignment.id])

  const handleMarkComplete = () => {
    const next = !isComplete
    setIsComplete(next)
    if (next) {
      localStorage.setItem(completeStorageKey(assignment.id), "true")
    } else {
      localStorage.removeItem(completeStorageKey(assignment.id))
    }
  }

  return (
    <>
      <Card className="flex flex-col gap-0 overflow-visible border border-foreground/10 p-0 ring-0">
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
        <CardFooter className="mt-auto flex w-full gap-2 border-t bg-muted/50 py-4 [.border-t]:py-4">
          <Button
            type="button"
            variant={isComplete ? "success" : "outline"}
            size="sm"
            className="flex-1 gap-1.5"
            onClick={handleMarkComplete}
          >
            {isComplete ? (
              <>
                <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} />
                Completed
              </>
            ) : (
              "Mark as Complete"
            )}
          </Button>
          {hasAvailability ? (
            <Button
              type="button"
              size="sm"
              className="flex-1"
              onClick={() => setViewOpen(true)}
            >
              View availability
            </Button>
          ) : (
            <Button asChild size="sm" className="flex-1">
              <Link href={availabilityHref}>Set availability</Link>
            </Button>
          )}
        </CardFooter>
      </Card>

      {savedAvailability ? (
        <AvailabilityViewDrawer
          open={viewOpen}
          onOpenChange={setViewOpen}
          availability={savedAvailability}
          editHref={availabilityHref}
        />
      ) : null}
    </>
  )
}
