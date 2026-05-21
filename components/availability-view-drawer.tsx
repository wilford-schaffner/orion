"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar03Icon, Clock01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  formatStoredDateRange,
  getTimeSlotLabels,
  type StoredAvailability,
} from "@/lib/availability"

export function AvailabilityViewDrawer({
  open,
  onOpenChange,
  availability,
  editHref,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  availability: StoredAvailability
  editHref: string
}) {
  const timeLabels = getTimeSlotLabels(availability.timeSlotIds)

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Your availability</DrawerTitle>
            <DrawerDescription>
              {formatStoredDateRange(availability.dateRange)}
            </DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="max-h-[50vh] px-4">
            <ItemGroup>
              <Item variant="muted" size="sm">
                <ItemMedia variant="icon">
                  <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Dates</ItemTitle>
                </ItemContent>
              </Item>
              <Item variant="outline" size="sm">
                <ItemContent>
                  <ItemTitle className="font-normal text-muted-foreground">
                    {formatStoredDateRange(availability.dateRange)}
                  </ItemTitle>
                </ItemContent>
              </Item>
              <ItemSeparator />
              <Item variant="muted" size="sm">
                <ItemMedia variant="icon">
                  <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Times</ItemTitle>
                </ItemContent>
              </Item>
              {timeLabels.map((label) => (
                <Item key={label} variant="outline" size="sm">
                  <ItemContent>
                    <ItemTitle className="font-normal">{label}</ItemTitle>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          </ScrollArea>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Close</Button>
            </DrawerClose>
            <Button variant="secondary" asChild>
              <Link href={editHref} onClick={() => onOpenChange(false)}>
                Edit
              </Link>
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
