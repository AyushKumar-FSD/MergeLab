import { Hero } from "@/components/Home/Hero/Hero";
import { Footer } from "../components/Home/Footer/Footer";
import { Navbar } from "../components/Home/Navbar/Navbar";
import { About } from "@/components/Home/About/About";
import ViewEditor from "@/components/Home/VisitEditor/ViewEditor";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero/>
      <About/>
      <ViewEditor />
      <Footer />
    </main>
  );
}