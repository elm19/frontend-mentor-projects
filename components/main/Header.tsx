import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import { PhoneNavBar } from "./navBarPhone";

const Header = () => {
  return (
    <header className="absolute bg-gray-100 w-full top-0 flex justify-between items-center px-5 py-3 dark:bg-gray-900 font-[family-name:var(--font-geist-mono)]">
      <PhoneNavBar  />
      <Logo />
      <div className="flex justify-end gap-2">
        <nav className="hidden md:block">
          <Button asChild variant="link">
            <Link href="/contact">About</Link>
          </Button>

          <Button asChild variant="link">
            <Link href="/contact">Blog</Link>
          </Button>

          <Button  asChild variant="link">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
