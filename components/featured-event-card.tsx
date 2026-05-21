import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar03Icon,
  StarIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { FeaturedEvent } from "@/lib/mock-data"

export function FeaturedEventCard({ event }: { event: FeaturedEvent }) {
  return (
    <Card className="flex h-full flex-col gap-0 border border-foreground/10 p-0 ring-0">
      <CardHeader className="pt-6">
        <Badge className="w-fit gap-1">
          <HugeiconsIcon icon={StarIcon} strokeWidth={2} />
          Official
        </Badge>
        <CardTitle className="line-clamp-2">{event.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {event.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4 pt-6">
        <div className="relative h-52 w-full overflow-hidden rounded-lg">
          <Image
            src={event.imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex w-full gap-2 border-t bg-muted/50 py-4 [.border-t]:py-4">
        <Button variant="outline" size="sm" className="flex-1 gap-1.5">
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
          {event.dateLabel}
        </Button>
        <Button size="sm" className="flex-1 gap-1.5">
          <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />
          Join
        </Button>
      </CardFooter>
    </Card>
  )
}
