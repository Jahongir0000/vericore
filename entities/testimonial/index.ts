import { TESTIMONIALS, type Testimonial } from "@shared/mock-data";

export function getAllTestimonials(): Testimonial[] {
  return TESTIMONIALS;
}

export type { Testimonial };
