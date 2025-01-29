import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="absolute bg-gray-100 w-full top-0 flex justify-between items-center px-5 py-3 dark:bg-gray-950 font-[family-name:var(--font-geist-mono)]">
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <Link href="/contact">
          <Button variant="link">
            About
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="link">
            Blog
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="link">
            Contact
          </Button>
        </Link>
      </nav>
      <ModeToggle />
    </header>
  );
};

export default Header;
