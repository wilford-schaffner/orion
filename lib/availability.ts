import { type DateRange } from "react-day-picker"

export type AvailabilityTimeSlot = {
  id: string
  label: string
}

export type StoredDateRange = {
  from: string
  to?: string
}

export type StoredAvailability = {
  dateRange: StoredDateRange
  timeSlotIds: string[]
}

export function availabilityStorageKey(assignmentId: string) {
  return `orion-availability:${assignmentId}`
}

export function getStoredAvailability(
  assignmentId: string
): StoredAvailability | null {
  if (typeof window === "undefined") return null
  const raw = localStorage.getItem(availabilityStorageKey(assignmentId))
  if (!raw) return null
  try {
    return JSON.parse(raw) as StoredAvailability
  } catch {
    return null
  }
}

export function setStoredAvailability(
  assignmentId: string,
  data: StoredAvailability
) {
  localStorage.setItem(availabilityStorageKey(assignmentId), JSON.stringify(data))
}

export function hasStoredAvailability(assignmentId: string) {
  return getStoredAvailability(assignmentId) !== null
}

export function dateRangeToStored(
  range: DateRange | undefined
): StoredDateRange | null {
  if (!range?.from) return null
  return {
    from: range.from.toISOString(),
    to: range.to?.toISOString(),
  }
}

export function storedToDateRange(stored: StoredDateRange): DateRange {
  return {
    from: new Date(stored.from),
    to: stored.to ? new Date(stored.to) : undefined,
  }
}

/** Hourly slots from 8:00 AM through 10:00 PM */
export const availabilityTimeSlots: AvailabilityTimeSlot[] = Array.from(
  { length: 15 },
  (_, index) => {
    const hour = 8 + index
    const date = new Date(2000, 0, 1, hour, 0)
    return {
      id: `hour-${hour}`,
      label: date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    }
  }
)

export const availabilityTimePeriods = ["AM", "PM"] as const

export type AvailabilityTimePeriod = (typeof availabilityTimePeriods)[number]

export function getTimeSlotHour(slot: AvailabilityTimeSlot) {
  return Number(slot.id.replace("hour-", ""))
}

export function getTimeSlotShortLabel(slot: AvailabilityTimeSlot) {
  return slot.label.replace(/\s?(AM|PM)$/i, "")
}

export function getTimeSlotPeriod(
  slot: AvailabilityTimeSlot
): AvailabilityTimePeriod {
  return getTimeSlotHour(slot) < 12 ? "AM" : "PM"
}

export function getTimeSlotsByPeriod() {
  return availabilityTimePeriods.reduce(
    (groups, period) => {
      groups[period] = availabilityTimeSlots.filter(
        (slot) => getTimeSlotPeriod(slot) === period
      )
      return groups
    },
    { AM: [], PM: [] } as Record<
      AvailabilityTimePeriod,
      AvailabilityTimeSlot[]
    >
  )
}

export function formatStoredDateRange(stored: StoredDateRange) {
  return formatDateRange(storedToDateRange(stored))
}

export function formatDateRange(range: DateRange | undefined) {
  if (!range?.from) return "your selected dates"

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  }

  if (!range.to) {
    return range.from.toLocaleDateString("en-US", {
      weekday: "long",
      ...dateOptions,
    })
  }

  const sameYear = range.from.getFullYear() === range.to.getFullYear()
  const fromLabel = range.from.toLocaleDateString("en-US", dateOptions)
  const toLabel = range.to.toLocaleDateString("en-US", {
    ...dateOptions,
    year: sameYear ? undefined : "numeric",
  })

  return `${fromLabel} – ${toLabel}`
}

export function getTimeSlotLabels(ids: string[]) {
  const labels = availabilityTimeSlots
    .filter((slot) => ids.includes(slot.id))
    .map((slot) => slot.label)
  return labels
}
