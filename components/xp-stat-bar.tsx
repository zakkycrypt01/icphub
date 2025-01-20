import { Progress } from "@/components/ui/progress"

interface XPStatBarProps {
  currentXP: number
  maxXP: number
  level: number
}

export function XPStatBar({ currentXP, maxXP, level }: XPStatBarProps) {
  const percentage = (currentXP / maxXP) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">Level {level}</span>
        <span>
          {currentXP} / {maxXP} XP
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  )
}

