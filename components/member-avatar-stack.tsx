import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"

export function MemberAvatarStack({
  headshots,
  extraCount,
}: {
  headshots: string[]
  extraCount?: number
}) {
  return (
    <div className="flex items-center gap-2">
      <AvatarGroup>
        {headshots.map((src) => (
          <Avatar key={src} size="sm">
            <AvatarImage src={src} alt="" />
            <AvatarFallback />
          </Avatar>
        ))}
      </AvatarGroup>
      {extraCount !== undefined && extraCount > 0 ? (
        <span className="text-sm text-muted-foreground">+{extraCount}</span>
      ) : null}
    </div>
  )
}
