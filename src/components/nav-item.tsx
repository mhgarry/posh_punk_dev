"use client";

import { POSHPUNK_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { FaChevronDown } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof POSHPUNK_CATEGORIES)[number];

interface NavItemProps {
    category: Category;
    handleOpen: () => void;
    close: () => void;
    isOpen: boolean;
    isAnyOpen: boolean;
}

const NavItem = ({
    isAnyOpen,
    category,
    handleOpen,
    close,
    isOpen,
}: NavItemProps) => {
    return (
        <div className="flex">
            <div className="relative flex items-center">
                <Button
                    className="gap-1.5"
                    onClick={handleOpen}
                    variant={isOpen ? "dark" : "pink"}
                >
                    {category.label}
                    <FaChevronDown
                        className={cn(
                            "h-4 w-4 transition-all text-background",
                            {
                                "-rotate-180": isOpen,
                            },
                        )}
                    />
                </Button>
            </div>
                      {isOpen ? (
                <div className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground",
                {
                    "animate-in fade-in-10 slide-in-from-top-5" : !isAnyOpen,
                })}>
                    <div className="absolute inset-0 top-1/2 bg-background  shadow">
                        <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                    <div className="col-span-4 start-1 grid grid-cols-3 gap-x-8">
                                        {category.featured.map((item) => (
                                            <div key={item.value} className="flex flex-col gap-4">
                                                <div className="relative h-40 w-full shadow-xl">
                                                    <Image
                                                        src={item.imageSrc}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        alt={item.label}
                                                    />
                                                </div>
                                                <div className="text-lg font-bold">{item.label}</div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            ) : null}
          </div>

    );
};

export default NavItem;
