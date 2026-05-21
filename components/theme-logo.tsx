"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

export function ThemeLogo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const src =
    mounted && resolvedTheme === "dark"
      ? "/images/logo-white-small.svg"
      : "/images/logo-black-small.svg"

  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image
        src={src}
        alt="Orion"
        width={294}
        height={228}
        className="h-6 w-auto md:h-7"
        priority
      />
    </Link>
  )
}
