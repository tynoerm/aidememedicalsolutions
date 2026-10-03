import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Solutions />

        <Services />

        <Process />

        <Results />

        <Testimonials />

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}