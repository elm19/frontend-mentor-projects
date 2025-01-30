"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Circle, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  // if (!mounted) {
  //   return <Circle className="inline h-[2.5rem] w-[2.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 checked:border-none" />
  // }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="link" size="icon">
        {!mounted ? 
        <Circle className="inline h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 checked:border-none" />: (
          <>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 checked:border-none" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
          </>
        )}
          
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem disabled={theme==='light'} onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem disabled={theme==='dark'}  onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem disabled={theme==='system'}  onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeSwitch


// <select className='absolute top-56' value={theme} onChange={e => setTheme(e.target.value)}>
  //   <option value="system">System</option>
  //   <option value="dark">Dark</option>
  //   <option value="light">Light</option>
  // </select>