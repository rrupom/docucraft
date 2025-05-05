import Image from "next/image";

export default function HamburgerIcon() {
  return (
    <Image
      src="/hamburger.svg"
      alt="Menu"
      className="w-2.5 stroke-zinc-900 dark:stroke-white"
    />
  );
}
