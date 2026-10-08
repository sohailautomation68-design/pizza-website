import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-pizza-yellow selection:text-black">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </main>
  );
}
