import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen relative">
    <ParticleBackground />
    <div className="particle-bg" />
    <div className="grid-bg fixed inset-0 z-0 pointer-events-none opacity-30" />
    <Navbar />
    <main className="relative z-10 pt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
