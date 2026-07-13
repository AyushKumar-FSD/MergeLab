import { Footer } from "../components/Home/Footer/Footer";
import { Navbar } from "../components/Home/Navbar/Navbar";
import { GuestWorkspaceOptions } from "@/components/GuestWorkspaceOptions/GuestWorkspaceOptions";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <GuestWorkspaceOptions />
      <Footer />
    </main>
  );
}