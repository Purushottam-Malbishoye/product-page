import React from 'react';
import Hero from '../components/HomePage/Hero';
import Features from '../components/HomePage/Features';
import LeadershipTeam from '../components/HomePage/LeadershipTeam';
import CTA from '../components/HomePage/CTA';
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />

      <CTA />
      <Footer />
    </div>
  );
}
