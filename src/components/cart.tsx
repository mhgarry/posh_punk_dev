'use client'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
} from './ui/sheet'
import { FaShoppingCart } from 'react-icons/fa'

import Link from 'next/link'
import { Separator } from './ui/separator'
import { buttonVariants } from './ui/button'
import { formatPrice } from '@/lib/utils'

import Image from 'next/image'

const Cart = () => {
  const itemCount = 0
  const amount = 2

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <FaShoppingCart
          className="h-6 w-6 flex-shrink-0 text-primary group-hover:text-primary/90"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-foreground group-hover:text-foreground/90">
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <div className="flex w-full flex-col pr-6">
            <div className="space-y-4 pr-6 mb-4">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping...</span>
                  <span className=" text-muted-foreground font-bold">
                    {formatPrice(amount)}
                  </span>
                </div>
                <div className="flex">
                  <span className="flex-1 ">Additional Fees...</span>
                  <span className="font-bold text-muted-foreground">
                    {formatPrice(amount)}
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex">
                <span className="flex-1 font-medium">Total</span>
                <span className="text-muted-foreground font-bold">
                  {formatPrice(amount)}
                </span>
              </div>
            </div>
            <SheetFooter>
              <SheetTrigger asChild>
                <Link
                  className={buttonVariants({
                    variant: 'default',
                    className: 'w-full',
                  })}
                  href="/cart"
                >
                  View Cart
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              className="relative mb-4 h-60 w-60 bg-secondary/10 text-muted-foreground"
              aria-hidden="true"
            >
              <Image
                src="/images/empty-cart.png"
                layout="fill"
                objectFit="contain"
                alt="Empty shopping cart image"
              />
            </div>
            <div className="text-xl font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: 'default',
                })}
              >
                Start Shopping
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart
