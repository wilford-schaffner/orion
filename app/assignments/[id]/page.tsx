import { notFound } from "next/navigation"

import { AssignmentDetailCard } from "@/components/assignment-detail-card"
import { GroupCard } from "@/components/group-card"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { SiteHeader } from "@/components/site-header"
import { getAssignment, getGroupsForAssignment } from "@/lib/mock-data"

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function AssignmentGroupsPage({ params }: PageProps) {
  const { id } = await params
  const assignment = getAssignment(id)

  if (!assignment) {
    notFound()
  }

  const groups = getGroupsForAssignment(id)

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <PageHeader
            backHref="/"
            backLabel="Home"
            title="Study groups"
            description={assignment.className}
          />

          <AssignmentDetailCard
            assignment={assignment}
            availabilityHref={`/assignments/${id}/availability`}
          />

          <Section
            title="Groups"
            description="Join a group studying for this assignment."
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {groups.map((group) => (
                <GroupCard key={group.id} group={group} />
              ))}
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}
