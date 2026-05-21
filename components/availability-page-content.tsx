"use client"

import * as React from "react"

import { AvailabilityScheduler } from "@/components/availability-scheduler"
import { PageHeader } from "@/components/page-header"
import { hasStoredAvailability } from "@/lib/availability"
import type { Assignment } from "@/lib/mock-data"

export function AvailabilityPageContent({
  assignment,
  assignmentId,
}: {
  assignment: Assignment
  assignmentId: string
}) {
  const [isEditing, setIsEditing] = React.useState(false)

  React.useEffect(() => {
    setIsEditing(hasStoredAvailability(assignmentId))
  }, [assignmentId])

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      <PageHeader
        className="shrink-0"
        backHref={`/assignments/${assignmentId}`}
        backLabel="Back to groups"
        title={isEditing ? "Edit availability" : "Set availability"}
        description={`${assignment.assignmentName} · ${assignment.className}`}
      />
      <AvailabilityScheduler
        assignmentId={assignmentId}
        className="min-h-0 flex-1"
      />
    </div>
  )
}
