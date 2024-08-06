import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { GiAmpleDress } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineBuild } from "react-icons/md";
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
    Icon: MdOutlineBuild,
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
];
export default function Home() {
  return (
    <header>
      <MaxWidthWrapper>
        <div className="py-8 mx-auto text-center flex flex-col bg-muted items-left px-8 max-w-7xl">
          <h1 className="text-4xl font-bold-tracking-tight text-primary text-left sm:text-6xl mb-4">
            Posh Punk .
            <h2 className="font-bold text-foreground">Digital Flea Market</h2>
          </h1>
          <p className="mt-6 text-lg text-left max-w-prose text-primary-foreground">
            A space for digital artists, collectors, DIYers, and makers to sell
            their creations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products">
              <Button variant="default">
                What Will Find You Today? &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
