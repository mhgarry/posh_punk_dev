/** @format */

import MaxWidthWrapper from '@/components/maxWidthWrapper'
import { Button } from '@/components/ui/button'

import { Card, CardFooter, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

import { FaPalette } from 'react-icons/fa6'
import { FaPenNib } from 'react-icons/fa6'

import { FaHandHoldingHeart } from 'react-icons/fa'

const perks = [
  {
    title: 'Vintage Vibes',
    Icon: FaPenNib,
    description: 'Find unique and one-of-a-kind items.',
  },
  {
    title: 'DIY',
    Icon: FaPalette,
    description: 'Find supplies and inspiration for your next project.',
  },
  {
    title: 'Handmade',
    Icon: FaHandHoldingHeart,
    description: 'Find unique handmade items and unique genuine friendships.',
  },
]
export default function Home() {
  return (
    <section className="flex flex-col bg-background mx-auto max-w-7xl items-center">
      <section>
        <MaxWidthWrapper>
          <div className="py-6 rounded-lg  mx-auto text-left flex flex-col bg-background mt-12 shadow-sm py-6 items-left  max-w-7xl">
            <div className="flex flex-col text-left">
              {' '}
              <h1 className="text-4xl font-bold font-tracking-tight text-primary text-left sm:text-6xl mb-2">
                Posh Punk.
              </h1>
              <h2 className="font-semibold text-foreground text-4xl">
                Digital Flea Market
              </h2>
            </div>
            <p className="mt-2 text-lg text-left max-w-prose text-primary-foreground">
              A space for digital artists, collectors, DIYers, and makers to
              sell their creations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/products">
                <Button variant="pink">What Will Find You Today?</Button>
              </Link>
            </div>
          </div>
          <div className="border-b border-secondary/50 mt-12 mb-12"></div>
        </MaxWidthWrapper>

        <section className="mx-auto text-center flex flex-col items-left max-w-7xl">
          <MaxWidthWrapper className="py-20">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <Card
                  key={perk.title}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center p-4 border border-secondary"
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/30 text-primary">
                      {<perk.Icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>
                  <CardHeader className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium">{perk.title}</h3>
                    <CardContent className="mt-3 text-sm text-muted-foreground sm:p-0">
                      {perk.description}
                    </CardContent>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>
      </section>
    </section>
  )
}
