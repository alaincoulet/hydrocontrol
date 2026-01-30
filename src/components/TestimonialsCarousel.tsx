"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  company: string;
  quote: string;
  context: string;
  image: string;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

export function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden"
        >
          <div className="grid gap-0 md:grid-cols-2">
            {/* Image du témoignage - Accessibilité : description incluant le nom de l'entreprise et le contexte */}
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src={currentTestimonial.image}
                alt={`Témoignage ${currentTestimonial.company} - ${currentTestimonial.context}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 space-y-4">
              <div>
                <h3 className="text-xl font-semibold">
                  {currentTestimonial.company}
                </h3>
                <p className="text-sm text-foreground/60 mt-1">
                  {currentTestimonial.context}
                </p>
              </div>
              <p className="text-base italic text-foreground/80 leading-relaxed">
                "{currentTestimonial.quote}"
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-accent"
                : "w-2 bg-foreground/20 hover:bg-foreground/40"
            }`}
            aria-label={`Aller au témoignage ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
