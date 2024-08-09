import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
// import NavItems from "./navitems";

import { Icons } from "./icons";
const Navbar = () => {
    return (
        <div className="bg-background sticky z-50 top-0 inset-x-0 shadow-m h-16">
            <header className="relative bg-background">
                <MaxWidthWrapper>
                    <div className="border-b border-foreground/20">
                        <div className="flex h-16 items-center">
                            {/* Mobile menu */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <Icons.logo className="h-10 w-10" />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                {/* <NavItems /> */}
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
};

export default Navbar;
