import Image from "next/image";
import Link from "next/link";
import React from "react";


const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src="/logo-light.svg"
        width={131}
        height={32}
        alt="logo"
        className="w-24 block dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        width={131}
        height={32}
        alt="elm19 logo"
        className="hidden dark:block"
        unoptimized
      />
    </Link>
  );
};


export default Logo;
