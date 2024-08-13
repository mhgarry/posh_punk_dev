"use client";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetDescription,
    SheetClose,
    SheetFooter,
    SheetTitle,
} from "./ui/sheet";
import { FaShoppingCart } from "react-icons/fa";

import { Button } from "./ui/button";

const Cart = () => {
    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <FaShoppingCart
                    className="h-6 w-6 flex-shrink-0 text-primary group-hover:text-primary/90"
                    aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-foreground group-hover:text-foreground/90">
                    2
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="flex items-center justify-between p-4 bg-background">
                    <SheetTitle>Cart</SheetTitle>
                </SheetHeader>
                <SheetDescription className="p-4">
                    Cart items (2)
                </SheetDescription>
                <SheetFooter className="p-4">
                    <Button variant="default">Checkout</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
