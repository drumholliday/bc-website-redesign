"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/Card";

/*
  Horizontal card carousel.

  Used for homepage preview sections that have more cards than should be
  shown at once. It keeps the page cleaner while still letting users browse
  through all available cards.
*/
type CarouselItem = {
  title: string;
  description: string;
  href: string;
};

type CardCarouselProps = {
  items: CarouselItem[];
};

export function CardCarousel({ items }: CardCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCards(direction: "left" | "right") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: direction === "left" ? -carousel.clientWidth : carousel.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="min-w-full snap-start sm:min-w-[calc(50%-0.625rem)]"
          >
            <Card
              title={item.title}
              description={item.description}
              href={item.href}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollCards("left")}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl font-semibold text-white transition hover:border-blue-400 hover:bg-blue-500/20"
          aria-label="Show previous cards"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={() => scrollCards("right")}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl font-semibold text-white transition hover:border-blue-400 hover:bg-blue-500/20"
          aria-label="Show next cards"
        >
          ›
        </button>
      </div>
    </div>
  );
}