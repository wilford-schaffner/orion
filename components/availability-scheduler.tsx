"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { type DateRange } from "react-day-picker"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  GridViewIcon,
  LeftToRightListDashIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  availabilityTimePeriods,
  availabilityTimeSlots,
  dateRangeToStored,
  formatDateRange,
  getStoredAvailability,
  getTimeSlotShortLabel,
  getTimeSlotsByPeriod,
  setStoredAvailability,
  storedToDateRange,
} from "@/lib/availability"
import { cn } from "@/lib/utils"

const defaultRange: DateRange = {
  from: new Date(2026, 4, 15),
  to: new Date(2026, 4, 31),
}

function TimeSlotIndicator({ selected }: { selected: boolean }) {
  return (
    <span className="relative flex size-4 shrink-0 items-center justify-center transition-transform duration-150 ease-out group-active/time-slot:scale-90">
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-full border border-muted-foreground/40 transition-all duration-150 ease-out",
          selected ? "scale-90 opacity-0" : "scale-100 opacity-100"
        )}
      />
      <HugeiconsIcon
        icon={Tick02Icon}
        strokeWidth={2}
        className={cn(
          "absolute inset-0 size-4 text-primary transition-all duration-150 ease-out",
          selected ? "scale-100 opacity-100" : "scale-90 opacity-0"
        )}
      />
    </span>
  )
}

export function AvailabilityScheduler({
  assignmentId,
  className,
}: {
  assignmentId: string
  className?: string
}) {
  const router = useRouter()
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    defaultRange
  )
  const [selectedTimeIds, setSelectedTimeIds] = React.useState<string[]>([])
  const [successOpen, setSuccessOpen] = React.useState(false)
  const [pendingSave, setPendingSave] = React.useState<{
    dateRange: DateRange
    timeSlotIds: string[]
  } | null>(null)
  const dialogCloseIntent = React.useRef<"undo" | "confirm" | null>(null)

  React.useEffect(() => {
    const saved = getStoredAvailability(assignmentId)
    if (saved) {
      setDateRange(storedToDateRange(saved.dateRange))
      setSelectedTimeIds(saved.timeSlotIds)
    }
  }, [assignmentId])

  const toggleTime = (id: string) => {
    setSelectedTimeIds((current) =>
      current.includes(id)
        ? current.filter((slotId) => slotId !== id)
        : [...current, id]
    )
  }

  const canSave = Boolean(dateRange?.from) && selectedTimeIds.length > 0

  const handleSave = () => {
    if (!canSave || !dateRange?.from) return
    const stored = dateRangeToStored(dateRange)
    if (!stored) return
    setPendingSave({ dateRange, timeSlotIds: selectedTimeIds })
    setSuccessOpen(true)
  }

  const confirmAvailability = () => {
    if (!pendingSave) return
    const stored = dateRangeToStored(pendingSave.dateRange)
    if (!stored) return
    setStoredAvailability(assignmentId, {
      dateRange: stored,
      timeSlotIds: pendingSave.timeSlotIds,
    })
    setPendingSave(null)
    router.push(`/assignments/${assignmentId}`)
  }

  const handleUndoSelection = () => {
    dialogCloseIntent.current = "undo"
    setSelectedTimeIds([])
    setPendingSave(null)
    setSuccessOpen(false)
  }

  const handleOkay = () => {
    dialogCloseIntent.current = "confirm"
    confirmAvailability()
  }

  const handleSuccessOpenChange = (open: boolean) => {
    if (open) {
      setSuccessOpen(true)
      return
    }

    const intent = dialogCloseIntent.current
    dialogCloseIntent.current = null

    if (intent === "undo") {
      setSuccessOpen(false)
      return
    }

    if (intent === "confirm") {
      setSuccessOpen(false)
      return
    }

    confirmAvailability()
    setSuccessOpen(false)
  }

  const timeSlotItemClassName = (isSelected: boolean) =>
    cn(
      "group/time-slot cursor-pointer transition-all duration-150 ease-out active:translate-y-px",
      isSelected && "border-primary bg-primary/5"
    )

  const timeSlotsByPeriod = getTimeSlotsByPeriod()

  const renderTimeSlot = (slot: (typeof availabilityTimeSlots)[number]) => {
    const isSelected = selectedTimeIds.includes(slot.id)
    return (
      <Item
        key={slot.id}
        variant="outline"
        size="sm"
        className={timeSlotItemClassName(isSelected)}
        onClick={() => toggleTime(slot.id)}
        role="button"
        tabIndex={0}
        aria-pressed={isSelected}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            toggleTime(slot.id)
          }
        }}
      >
        <ItemMedia variant="icon">
          <TimeSlotIndicator selected={isSelected} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="font-normal">{slot.label}</ItemTitle>
        </ItemContent>
      </Item>
    )
  }

  return (
    <>
      <div
        className={cn(
          "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6",
          className
        )}
      >
        <Card size="sm" className="flex min-h-0 flex-col overflow-hidden">
          <CardHeader className="shrink-0">
            <CardTitle>Select dates</CardTitle>
            <CardDescription>
              Choose the dates you are available to study.
            </CardDescription>
          </CardHeader>
          <CardContent className="min-h-0 flex-1 overflow-auto">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              defaultMonth={dateRange?.from}
              className="w-full rounded-md border shadow-sm"
              classNames={{ root: "w-full" }}
            />
          </CardContent>
        </Card>

        <Card size="sm" className="flex min-h-0 flex-col overflow-hidden">
          <CardHeader className="shrink-0">
            <CardTitle>Times</CardTitle>
            <CardDescription>
              Select all times you are available between 8:00 AM and 10:00 PM
              for {formatDateRange(dateRange)}.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <Tabs defaultValue="list" className="flex min-h-0 flex-1 flex-col">
              <TabsList className="mb-3 w-full shrink-0">
                <TabsTrigger value="list" className="flex-1 gap-2">
                  <HugeiconsIcon
                    icon={LeftToRightListDashIcon}
                    strokeWidth={2}
                  />
                  List
                </TabsTrigger>
                <TabsTrigger value="block" className="flex-1 gap-2">
                  <HugeiconsIcon icon={GridViewIcon} strokeWidth={2} />
                  Block
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="list"
                className="mt-0 flex min-h-0 flex-1 flex-col data-[state=inactive]:hidden"
              >
                <ScrollArea className="h-0 min-h-0 flex-1 pr-3">
                  <ItemGroup className="gap-2">
                    {availabilityTimeSlots.map(renderTimeSlot)}
                  </ItemGroup>
                </ScrollArea>
              </TabsContent>
              <TabsContent
                value="block"
                className="mt-0 flex min-h-0 flex-1 flex-col data-[state=inactive]:hidden"
              >
                <ScrollArea className="h-0 min-h-0 flex-1 pr-3">
                  <div className="space-y-4">
                    {availabilityTimePeriods.map((period) => (
                      <div key={period} className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">
                          {period}
                        </p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {timeSlotsByPeriod[period].map((slot) => {
                            const isSelected = selectedTimeIds.includes(slot.id)
                            return (
                              <Item
                                key={slot.id}
                                variant="outline"
                                size="sm"
                                className={cn(
                                  timeSlotItemClassName(isSelected),
                                  "justify-center"
                                )}
                                onClick={() => toggleTime(slot.id)}
                                role="button"
                                tabIndex={0}
                                aria-pressed={isSelected}
                              >
                                <ItemMedia variant="icon">
                                  <TimeSlotIndicator selected={isSelected} />
                                </ItemMedia>
                                <ItemContent className="items-center text-center">
                                  <ItemTitle className="text-sm font-normal">
                                    {getTimeSlotShortLabel(slot)}
                                  </ItemTitle>
                                </ItemContent>
                              </Item>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="shrink-0 border-t">
            <Button
              className="w-full"
              disabled={!canSave}
              onClick={handleSave}
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Dialog open={successOpen} onOpenChange={handleSuccessOpenChange}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-sm">
          <div className="flex flex-col gap-6 p-6">
            <DialogHeader>
              <DialogTitle>Successfully set</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-success/15 text-success">
                <HugeiconsIcon
                  icon={Tick02Icon}
                  strokeWidth={2}
                  className="size-6"
                />
              </div>
              <DialogDescription className="text-center">
                Your availability has been successfully set.
              </DialogDescription>
            </div>
          </div>
          <DialogFooter className="border-t bg-muted/50 px-6 py-4">
            <Button variant="outline" onClick={handleUndoSelection}>
              Undo Selection
            </Button>
            <Button onClick={handleOkay}>Okay</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
