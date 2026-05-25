// ─── Global Types ────────────────────────────────────────────────────

export interface Service {
  icon: string;
  name: string;
  desc: string;
  price: string;
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  isOwner: boolean;
  seed: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface GalleryItem {
  label: string;
  seed: string;
}

export type AdminTab =
  | "overview"
  | "services"
  | "team"
  | "gallery"
  | "testimonials"
  | "settings";

export type AppView = "main" | "admin";
