// "use client";

// import { ChevronDown } from "lucide-react";
// import { Button } from "./ui/button";
// import { POSHPUNK_CATEGORIES } from "@/config";

// type Category = (typeof POSHPUNK_CATEGORIES)[number];

// interface NavItemProps {
//     category: Category;
//     handleOpen: () => void;
//     isOpen: boolean;
//     isAnyOpen: boolean;
// }

// const NavItem = ({ isAnyOpen, category, handleOpen, isOpen }: NavItemProps) => {
//     return (
//         <div className="flex">
//             <div className="relative items-center flex">
//                 <Button className="gap-1.5" onClick={handleOpen} variant={isOpen ? 'accent' : 'primary'}>{category.label}</Button>
//                 <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
//                     "-rotate-180": isOpen,
//                 })}/>
//             </div>
//         </div>
//     );
// };

// export default NavItem;
