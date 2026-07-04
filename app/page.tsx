"use client";

import NavBar from "@/app/_components/nav-bar";
import Hero from "@/app/_components/hero";
import ExpertiseMatrix from "@/app/_components/expertise-matrix";
import FeaturedWork from "@/app/_components/featured-work";
import Contact from "@/app/_components/contact";
import Footer from "@/app/_components/footer";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@300;400;600&family=Playfair+Display:wght@700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background-color: #F5F5F5; color: #111111; -webkit-font-smoothing: antialiased; }
        ::selection { background: #003153; color: #F5F5F5; }
        @media (max-width: 700px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .matrix-grid { grid-template-columns: 1fr !important; }
          .project-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <NavBar />
      <Hero />
      <ExpertiseMatrix />
      <FeaturedWork />
      <Contact />
      <Footer />
    </>
  );
}