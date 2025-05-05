import { assets } from "@/assets";

export default function Search() {
  return (
    <>
      <div className="hidden lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <img src={assets.searchIcon} className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 focus:border-none focus:outline-none"
          />
          <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
            <kbd className="font-sans">Ctrl </kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        </button>
      </div>

      <div className="flex items-center gap-5 lg:hidden">
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
          aria-label="Toggle navigation"
        >
          <img
            src={assets.hamburger}
            alt="Menu"
            className="w-2.5 stroke-zinc-900 dark:stroke-white"
          />
        </button>
        <a aria-label="Home" href="/">
          <img src={assets.logo} alt="Protocol" className="h-6" />
        </a>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
        <div className="flex gap-4">
          <div className="contents lg:hidden">
            <button
              type="button"
              className="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
              aria-label="Find something..."
            >
              <img src={assets.searchIcon} alt="Search" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
