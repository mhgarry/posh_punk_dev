import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
});

export default function MaxWidthWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
            {children}
        </div>
    );
}
