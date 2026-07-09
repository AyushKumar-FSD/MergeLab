import { About } from "../components/Home/About/About";
import { Footer } from "../components/Home/Footer/Footer";
import { Hero } from "../components/Home/Hero/Hero";
import { Navbar } from "../components/Home/Navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}