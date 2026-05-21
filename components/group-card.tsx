import { MemberAvatarStack } from "@/components/member-avatar-stack"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import type { StudyGroup } from "@/lib/mock-data"
import { headshotsForMembers } from "@/lib/utils"

export function GroupCard({ group }: { group: StudyGroup }) {
  return (
    <Card className="flex flex-col gap-0 overflow-visible border border-foreground/10 p-0 ring-0">
      <CardContent className="space-y-3 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <Avatar className="shrink-0">
            <AvatarFallback className="text-xs">SG</AvatarFallback>
          </Avatar>
          <div className="min-w-0 space-y-1">
            <CardTitle className="line-clamp-2">
              {group.name}
            </CardTitle>
            <CardDescription>
              {group.memberInitials.length + group.extraMemberCount} members
            </CardDescription>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex min-h-14 w-full items-center justify-between gap-2 border-t bg-muted/50 py-4 [.border-t]:py-4">
        <MemberAvatarStack
          headshots={headshotsForMembers(group.memberInitials.slice(0, 3))}
          extraCount={group.extraMemberCount}
        />
        <Button size="sm">Join</Button>
      </CardFooter>
    </Card>
  )
}
