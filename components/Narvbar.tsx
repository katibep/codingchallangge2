"use client"

import * as React from "react"
import {
  Bed,
  Castle,
  ChevronRight,
  Home,
  Image,
  Landmark,
  LeafyGreen,
  PocketIcon as Pool,
  Settings2,
  Sparkles,
  Warehouse,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

interface NavItem {
  label: string
  icon: React.ReactNode
  isActive?: boolean
}

export default function PropertyNav() {
  const [showPrices, setShowPrices] = React.useState(false)

  const navItems: NavItem[] = [
    { label: "Rooms", icon: <Home className="h-6 w-6" />, isActive: true },
    { label: "Icons", icon: <Image className="h-6 w-6" /> },
    { label: "Bed & breakfasts", icon: <Bed className="h-6 w-6" /> },
    { label: "Amazing pools", icon: <Pool className="h-6 w-6" /> },
    { label: "Design", icon: <Settings2 className="h-6 w-6" /> },
    { label: "Countryside", icon: <LeafyGreen className="h-6 w-6" /> },
    { label: "Farms", icon: <Warehouse className="h-6 w-6" /> },
    { label: "Mansions", icon: <Landmark className="h-6 w-6" /> },
    { label: "Castles", icon: <Castle className="h-6 w-6" /> },
    { label: "OMG!", icon: <Zap className="h-6 w-6" /> },
    { label: "Luxe", icon: <Sparkles className="h-6 w-6" /> },
  ]

  const scrollContainer = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const scrollAmount = direction === "left" ? -200 : 200
      scrollContainer.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative border-b">
      <div className="flex items-center justify-between px-4">
        <div ref={scrollContainer} className="flex flex-1 items-center gap-8 overflow-x-auto py-4 scrollbar-hide">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={cn(
                "flex min-w-fit flex-col items-center gap-1",
                "text-sm text-muted-foreground transition-colors hover:text-foreground",
                item.isActive && "text-foreground",
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 border-l pl-4">
          <Button variant="outline" className="gap-2">
            <Settings2 className="h-4 w-4" />
            Filters
          </Button>
          <div className="flex items-center gap-2">
            <Switch id="show-prices" checked={showPrices} onCheckedChange={setShowPrices} />
            <label htmlFor="show-prices" className="text-sm text-muted-foreground">
              Display total before taxes
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-gradient-to-l from-background from-50% p-2"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

