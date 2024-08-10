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
        </div>


    );
};

export default NavItem;
