import { notFound } from "next/navigation"

import { AvailabilityPageContent } from "@/components/availability-page-content"
import { SiteHeader } from "@/components/site-header"
import { getAssignment } from "@/lib/mock-data"

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function AvailabilityPage({ params }: PageProps) {
  const { id } = await params
  const assignment = getAssignment(id)

  if (!assignment) {
    notFound()
  }

  return (
    <div className="flex min-h-svh flex-col lg:h-svh lg:max-h-svh lg:overflow-hidden">
      <SiteHeader />
      <main className="flex min-h-0 flex-1 flex-col overflow-hidden px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex h-full min-h-0 w-full max-w-3xl flex-col">
          <AvailabilityPageContent
            assignment={assignment}
            assignmentId={id}
          />
        </div>
      </main>
    </div>
  )
}
