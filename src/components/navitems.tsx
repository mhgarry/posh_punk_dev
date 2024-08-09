// "use client";

// import { POSHPUNK_CATEGORIES } from "@/config";
// import { useState } from "react";
// import NavItem from "./navitem";

// const NavItems = () => {
//     const [activeIndex, setIsActiveIndex] = useState<string | null>(null);

//     return (
//         <div className="flex gap-4 h-full">
//             {POSHPUNK_CATEGORIES.map((category, i) => {
//                 const handleOpen = () => {
//                     if (isActive === i) {
//                         setIsActive(null);
//                     } else {
//                         setIsActiveIndex(i);
//                     }
//                 };

//                 const isOpen = (i = activeIndex);
//                 return (
//                     <NavItem
//                         key={category.label}
//                         category={category}
//                         handleOpen={handleOpen}
//                         isOpen={isOpen}
//                         isAnyOpen={activeIndex !== null}
//                     />
//                 );
//             })}
//         </div>
//     );
// };
