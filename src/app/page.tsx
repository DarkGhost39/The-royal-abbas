import Nav         from "@/components/layout/Nav";
import Footer      from "@/components/layout/Footer";
import Hero        from "@/components/sections/Hero";
import About       from "@/components/sections/About";
import Services    from "@/components/sections/Services";
import Team        from "@/components/sections/Team";
import Gallery     from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import BookingCTA  from "@/components/sections/BookingCTA";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
