import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets";

export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          className="h-6 w-auto"
          src={assets.logo}
          alt="Protocol"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  );
}
