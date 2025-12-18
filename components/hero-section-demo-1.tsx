"use client";

import { Star } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EncryptedText } from "@/components/ui/encrypted-text";


interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
    className?: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
  className?: string;
}

const Hero7 = ({
  heading = "Sameer Chavan",
  description = "I build reliable, performance-focused web applications and explore practical uses of AI and modern tooling.",
  button = {
    text: "Discover all components",
    url: "https://www.shadcnblocks.com",
  },
  reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
  className,
}: Hero7Props) => {
  return (
    <section className={cn("min-h-screen w-full flex items-center justify-center py-20 md:py-32 relative overflow-hidden bg-white dark:bg-black", className)}>
      {/* Grid Pattern */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for fading */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Content */}
      <div className="container text-center relative z-10 px-4 md:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-green-500 tracking-tight">
            <EncryptedText text={heading} />
          </h1>
          <p className="text-balance text-white text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#projects");
                if (target && (window as any).lenis) {
                  (window as any).lenis.scrollTo(target);
                } else if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >View Projects</a>
          </Button>
          <Button asChild size="lg" className="bg-white border-green-500 text-green-500 hover:bg-gray-500 hover:text-white w-full sm:w-auto">
            <a href="/resume.pdf" download>Download CV</a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export { Hero7 };
