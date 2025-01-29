"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();
  const src = theme === "light" ? "/assets/logo.svg" : "/assets/logo-dark.svg";

  return (
    <Image
      src={src}
      width={131}
      height={32}
      className="w-16 lg:w-24"
      alt="elm19 logo"
    />
  );
};

export default Logo;
