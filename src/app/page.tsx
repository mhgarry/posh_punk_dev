import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

import { GiAmpleDress } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { MdBuild } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LiaDumpsterFireSolid } from "react-icons/lia";

const perks = [
  {
    title: "Vintage Vibes",
    Icon: GiAmpleDress,
    description: "Find unique and one-of-a-kind items.",
  },
  {
    title: "Support Artists",
    Icon: FaPaintBrush,
    description: "Support independent artists and creators.",
  },
  {
    title: "DIY",
    Icon: MdBuild,
    description: "Find supplies and inspiration for your next project.",
  },
  {
    title: "Handmade",
    Icon: FaHandHoldingHeart,
    description: "Find unique handmade items and unique genuine friendships.",
  },
  {
    title: "Dumpster Treasure",
    Icon: LiaDumpsterFireSolid,
    description: "Find supplies and inspiration for your next project.",
  },
  {
    title: "Vintage Vibes",
    Icon: GiAmpleDress,
    description: "Find unique and one-of-a-kind items.",
  },
];
export default function Home() {
  return (
    <section className="flex flex-col bg-background mx-auto max-w-7xl items-center">
      <section>
        <MaxWidthWrapper>
          <div className="py-6 border border-primary/50 rounded-lg  mx-auto text-left flex flex-col bg-background mt-12 shadow-sm py-6 items-left px-6 max-w-7xl">
            <div className="flex flex-col text-left">
              {" "}
              <h1 className="text-4xl font-bold font-tracking-tight text-primary text-left sm:text-6xl mb-2">
                Posh Punk.
              </h1>
              <h2 className="ml-6 font-semibold text-foreground text-4xl">
                Digital Flea Market
              </h2>
            </div>
            <p className="mt-2 ml-12 text-lg text-left max-w-prose text-primary-foreground">
              A space for digital artists, collectors, DIYers, and makers to
              sell their creations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 ml-16">
              <Link href="/products">
                <Button variant="secondary">What Will Find You Today?</Button>
              </Link>
            </div>
          </div>
          <div className="border-b border-primary/50 mt-12 mb-12"></div>
        </MaxWidthWrapper>

        <MaxWidthWrapper>
          <section className="mx-auto text-center flex flex-col items-left max-w-7xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-background max-w-7xl">
              {perks.map((perk) => (
                <Card
                  key={perk.title}
                  className="p-6 flex h-100 flex flex-col boder border-primary/50 items-center justify-center bg-background shadow-sm"
                >
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-primary-foreground">
                      {perk.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="flex flex-col items-center justify-center">
                    <perk.Icon className="text-primary" />

                    <p className="text-primary-foreground">
                      {perk.description}
                    </p>
                  </CardContent>

                  <CardFooter>
                    <Link href="/products">
                      <Button variant="secondary">Shop Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </MaxWidthWrapper>
      </section>
    </section>
  );
}
