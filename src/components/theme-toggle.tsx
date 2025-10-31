"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
    // Set to light mode on first mount if it's system
    if (theme === 'system') {
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    if (!mounted) return

    // Toggle between light and dark only
    const currentTheme = theme === 'system' ? resolvedTheme : theme

    if (currentTheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {isDark ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme (currently {isDark ? 'dark' : 'light'})</span>
    </Button>
  )
}
