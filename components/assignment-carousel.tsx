"use client"

import * as React from "react"

import { AssignmentCard } from "@/components/assignment-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import type { Assignment } from "@/lib/mock-data"

export function AssignmentCarousel({
  assignments,
}: {
  assignments: Assignment[]
}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    onSelect()
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api.off("reInit", onSelect)
      api.off("select", onSelect)
    }
  }, [api])

  const handlePrevious = React.useCallback(() => {
    if (!api) return
    const snaps = api.scrollSnapList()
    const current = api.selectedScrollSnap()
    if (snaps.length <= 3 && current > 0) {
      api.scrollTo(0)
      return
    }
    api.scrollPrev()
  }, [api])

  const handleNext = React.useCallback(() => {
    if (!api) return
    const snaps = api.scrollSnapList()
    const current = api.selectedScrollSnap()
    if (snaps.length <= 3 && current === 0) {
      api.scrollTo(snaps.length - 1)
      return
    }
    api.scrollNext()
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: 5,
      }}
      className="w-full px-10 sm:px-12"
    >
      <CarouselContent className="ml-0 py-2">
        {assignments.map((assignment) => (
          <CarouselItem
            key={assignment.id}
            className="basis-full pl-0 lg:basis-1/5"
          >
            <div className="px-2">
              <AssignmentCard assignment={assignment} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="left-0 hidden sm:inline-flex"
        disabled={!canScrollPrev}
        onClick={handlePrevious}
      />
      <CarouselNext
        className="right-0 hidden sm:inline-flex"
        disabled={!canScrollNext}
        onClick={handleNext}
      />
    </Carousel>
  )
}
