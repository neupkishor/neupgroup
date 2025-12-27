import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section className="w-full py-24 md:py-32 lg:py-48 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 bg-secondary rounded-full right-0 bottom-0 translate-x-1/2 translate-y-1/2 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-6 text-left">
            <div className="space-y-4 max-w-3xl">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                We build meaningful digital ventures.
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Neup Group is a venture studio from Nepal, focused on building the next generation of products and platforms for a global audience.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#ventures">
                  Explore Ventures
                  <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:contact@neup.group">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          {heroImage && (
            <div className="flex justify-center">
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint={heroImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
