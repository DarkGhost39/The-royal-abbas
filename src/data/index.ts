import type { Service, TeamMember, Testimonial, GalleryItem } from "@/types";

// ─── Services ────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    icon: "✂",
    name: "Hair Styling",
    desc: "Precision cuts, blowouts & signature styles tailored to your unique aesthetic.",
    price: "From ₨ 1,500",
  },
  {
    icon: "◈",
    name: "Hair Coloring",
    desc: "Balayage, highlights & full-color transformations by our master colorists.",
    price: "From ₨ 3,500",
  },
  {
    icon: "✦",
    name: "Hair Spa",
    desc: "Deep conditioning, scalp therapies & restorative treatments for lustrous hair.",
    price: "From ₨ 2,000",
  },
  {
    icon: "◇",
    name: "Keratin Treatment",
    desc: "Smoothing treatments that eliminate frizz & restore silky, healthy texture.",
    price: "From ₨ 5,000",
  },
  {
    icon: "❀",
    name: "Facial & Skin Care",
    desc: "Luxury facials, skin analysis & personalized skincare rituals.",
    price: "From ₨ 2,500",
  },
  {
    icon: "♔",
    name: "Beard Grooming",
    desc: "Precision shaping, hot towel shaves & premium conditioning treatments.",
    price: "From ₨ 1,200",
  },
  {
    icon: "◉",
    name: "Makeup",
    desc: "Editorial, bridal & special occasion styling by our expert artists.",
    price: "From ₨ 4,000",
  },
  {
    icon: "✿",
    name: "Nail Services",
    desc: "Manicures, pedicures, nail art & premium gel treatments.",
    price: "From ₨ 1,800",
  },
];

// ─── Team Members ────────────────────────────────────────────────────
export const TEAM: TeamMember[] = [
  {
    name: "Abaas Khan",
    role: "Founder & Creative Director",
    expertise: "Color Specialist · Balayage Expert",
    isOwner: true,
    seed: "abaas1",
  },
  {
    name: "Zara Malik",
    role: "Co-Founder & Head Stylist",
    expertise: "Precision Cuts · Keratin Expert",
    isOwner: true,
    seed: "zara1",
  },
  {
    name: "Rayan Ahmed",
    role: "Senior Hair Artist",
    expertise: "Creative Coloring · Highlights",
    isOwner: false,
    seed: "rayan1",
  },
  {
    name: "Noor Fatima",
    role: "Skin & Beauty Expert",
    expertise: "Facials · Makeup Artistry",
    isOwner: false,
    seed: "noor1",
  },
  {
    name: "Ali Hassan",
    role: "Beard & Grooming Specialist",
    expertise: "Classic Shaves · Beard Design",
    isOwner: false,
    seed: "ali1",
  },
  {
    name: "Sana Butt",
    role: "Nail Art Technician",
    expertise: "Gel Nails · 3D Nail Art",
    isOwner: false,
    seed: "sana1",
  },
  {
    name: "Omar Sheikh",
    role: "Hair Spa Therapist",
    expertise: "Scalp Treatments · Hair Spa",
    isOwner: false,
    seed: "omar1",
  },
  {
    name: "Layla Rizvi",
    role: "Junior Stylist",
    expertise: "Blowouts · Basic Coloring",
    isOwner: false,
    seed: "layla1",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aisha Siddiqui",
    role: "Marketing Executive",
    text: "The Royal Abaas completely transformed my hair. The atmosphere is divine — I felt like royalty from the moment I walked in. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Bilal Chaudhry",
    role: "Entrepreneur",
    text: "Best beard grooming experience I've ever had. The team is incredibly skilled and professional. This is my new go-to, no question.",
    rating: 5,
  },
  {
    name: "Maryam Tariq",
    role: "Fashion Blogger",
    text: "I came for a balayage and left looking like I stepped off a magazine shoot. Zara is a genius colorist. Absolutely obsessed with my results!",
    rating: 5,
  },
  {
    name: "Usman Ali",
    role: "Doctor",
    text: "Finally a salon that understands luxury. Clean, modern, and the service is impeccable. I've recommended it to all my colleagues.",
    rating: 5,
  },
  {
    name: "Farah Naz",
    role: "Architect",
    text: "The keratin treatment here is life-changing. My hair has never felt this smooth. The entire experience was pure luxury.",
    rating: 5,
  },
];

// ─── Gallery ─────────────────────────────────────────────────────────
export const GALLERY: GalleryItem[] = [
  { label: "Salon Interior",  seed: "luxury-interior-beauty" },
  { label: "Balayage Session",seed: "hair-color-salon"       },
  { label: "Styling Studio",  seed: "salon-chair-modern"     },
  { label: "Nail Artistry",   seed: "nail-art-luxury"        },
  { label: "Bridal Makeup",   seed: "bridal-beauty"          },
  { label: "Beard Grooming",  seed: "mens-grooming"          },
  { label: "Hair Spa",        seed: "hair-spa-luxury"        },
  { label: "Color Transform", seed: "hair-transformation"    },
];
