import { Button } from "@/components/ui/button";

import { LucideMenuSquare } from "lucide-react";
import { XOctagon } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ThemeSwitch from "./ThemeSwitch";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export function PhoneNavBar() {
  return (
    <Drawer direction="left" >
      <DrawerTrigger asChild className="md:hidden">
        <Button size="icon" variant="link">
          <LucideMenuSquare size={100} className="w-40" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-72 h-full">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="flex justify-between px-2">
              <DrawerClose>
                <XOctagon />
              </DrawerClose>
              <ThemeSwitch />
            </DrawerTitle>
          </DrawerHeader>
          <Separator color="red" />
          <DrawerFooter>
          <nav className="flex flex-col justify-start items-start text-left">
              <Button asChild variant="link">
                <Link href="/contact">About</Link>
              </Button>

              <Button asChild variant="link">
                <Link href="/contact">Blog</Link>
              </Button>

              <Button asChild variant="link">
                <Link href="/contact">Contact</Link>
              </Button>
            </nav>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
