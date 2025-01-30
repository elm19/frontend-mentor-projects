import Image from "next/image";
import Link from "next/link";
import React from "react";


const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src="/assets/logo-light.svg"
        width={131}
        height={32}
        alt="logo"
        className="w-24 md:w-32 block dark:hidden"
      />
      <Image
        src="/assets/logo-dark.svg"
        width={131}
        height={32}
        alt="elm19 logo"
        className="w-24 md:w-32 hidden dark:block"
        unoptimized
      />
    </Link>
  );
};


export default Logo;
