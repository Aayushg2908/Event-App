import Link from "next/link";
import Image from "next/image";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({
                  size: "lg",
                  className: "rounded-full",
                })
              )}
            >
              Login
            </Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
