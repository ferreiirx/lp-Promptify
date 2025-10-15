import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <h1 className={cn("font-headline text-3xl font-bold text-white text-glow", className)}>
      Promptify
    </h1>
  )
}
