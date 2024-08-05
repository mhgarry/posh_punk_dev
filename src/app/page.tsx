import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background">
      <Button variant="outline">
        <Image
          src="/logo.png"
          alt="Posh Punk Digital Flea Market"
          width={24}
          height={24}
        />
        <span className="p-2">Hello World</span>
      </Button>
    </div>
  );
}
