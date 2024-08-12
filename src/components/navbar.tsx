import Link from "next/link";
import MaxWidthWrapper from "./maxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./nav-items";

const Navbar = async () => {
    return (
        <div className="bg-background sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-background">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* <MobileNav /> */}

                            <div className="ml-4 flex lg:ml-0 lg:mr-8">
                                <Link href="/">
                                    <Icons.logo className="h-10 w-10" />
                                </Link>
                            </div>
                            <div className="hidden lg:flex lg:flex-1  lg:items-center lg:justify-between lg:space-x-6">
                                <NavItems />
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <div className="ml-4 flow-root lg:ml-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
};

export default Navbar;
