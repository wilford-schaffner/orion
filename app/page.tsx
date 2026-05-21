import { AssignmentCarousel } from "@/components/assignment-carousel"
import { CategoryChip } from "@/components/category-chip"
import { ClassIcon } from "@/components/class-icon"
import { FeaturedEventsCarousel } from "@/components/featured-events-carousel"
import { Section, PageSections, SectionDivider } from "@/components/section"
import { SiteHeader } from "@/components/site-header"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  categories,
  classes,
  featuredEvents,
  getSortedAssignments,
} from "@/lib/mock-data"

export default function HomePage() {
  const sortedAssignments = getSortedAssignments()

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="space-y-10 px-4 py-8 sm:px-6 lg:px-8">
          <section className="space-y-4">
            <Section
              title="Assignments"
              description="Tap an assignment to find study groups."
            />
            <AssignmentCarousel assignments={sortedAssignments} />
          </section>

          <SectionDivider />

          <section className="space-y-4">
            <Section title="Featured study events" />
            <FeaturedEventsCarousel events={featuredEvents} />
          </section>

          <PageSections>
            <Section
              title="Group categories"
              description="Browse study groups by how you like to work."
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <CategoryChip key={category.id} category={category} />
                ))}
              </div>
            </Section>

            <SectionDivider />

            <Section title="Classes">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {classes.map((classItem) => (
                  <Card key={classItem.id}>
                    <CardHeader className="flex-row items-center gap-3 space-y-0">
                      <ClassIcon classId={classItem.id} />
                      <div className="min-w-0">
                        <CardTitle className="text-base">
                          {classItem.code}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {classItem.name}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </Section>
          </PageSections>
        </div>
      </main>
    </>
  )
}
