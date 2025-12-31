
// new features section:
import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../shared/GlassCard";
import { ShieldCheck, Cpu, Landmark, Plus } from "lucide-react";
import ProcessScroller from "../HomePage/ProcessScroller";

const imgInsurance = "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const imgIT = "https://images.unsplash.com/photo-1646038572806-a9736b3ebb2b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const imgBanking = "https://images.unsplash.com/photo-1646388286288-476b7329e2e0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const imgPlus = "https://images.unsplash.com/photo-1646388286080-62887d1b34ab?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

// const steps = [
//           { title: "1. You tell Lucy who to go after", desc: "Define ICP, segments (insurance, IT, banking), geo, employee size and titles.", img: img1 },
//           { title: "2. Lucy finds and researches leads for you", desc: "Uses B2B data, web signals, hiring, funding and tech stack to build rich profiles.", img: img2 },
//           { title: "3. Lucy writes and sends hyper-personalized sequences", desc: "Multi-step outbound email campaigns, personalized 1:1 for every prospect.", img: img3 },
//           { title: "4. Lucy hands you only hot replies", desc: "Uses sentiment analysis to detect interest and routes qualified responses straight to your inbox or Slack.", img: img4 },
//         ];


// imgcard defined here
// const ImgCard = ({ title, className = "" }) => (
//   <div className={`glass-strong rounded-2xl overflow-hidden ${className}`}>
//      <div className="h-full w-full bg-gradient-to-b from-purple-700 to-black " /> {/*style={{ backgroundImage: `url(${image})` }} */}
//     {/* {overlay && <div className="absolute inset-0 bg-black/35" />} */}
//   </div>
// );

const FeatureCard = ({ title, description, className = "", image }) => (
  <div className={`relative rounded-2xl border border-white/40 bg-white/[0.03] p-7 backdrop-blur-sm overflow-hidden ${className}`}>
    {/* Optional background image */}
    {image && (
      <>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ backgroundImage: `url("${image}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent" />
      </>
    )}

    <div className="relative z-10">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
    </div>
  </div>
);

export default function Features() {
  return (
    <section className="py-12 px-4 scroll-mt-16" id="industries">
      <div className="max-w-7xl mx-auto">
        
        {/* Block 1: lucy your ai sdr */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Lucy, your AI SDR
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            automates the full SDR workflow for each industry you sell into.
          </p>
        </div>

        {/* industry cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-32">

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative h-[220px] rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgInsurance})` }} />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-full p-6 backdrop-blur-sm bg-white/[0.03]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="h-5 w-5 text-white/80" />
              </div>
              <h3 className="text-base font-semibold text-white">Insurance Lucy</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Speaks the language of policies, premiums, claims, compliance and risk—so outreach sounds like an expert, not a bot.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
          className="relative h-[220px] rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-bottom" style={{ backgroundImage: `url(${imgIT})` }} />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-full p-6 backdrop-blur-sm bg-white/[0.03]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <Cpu className="h-5 w-5 text-white/80" />
              </div>
              <h3 className="text-base font-semibold text-white">IT / SaaS Lucy</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                personalizes on tech stack, tools in use and role-specific pains for CTO, CISO, Product, and RevOps.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
          className="relative h-[220px] rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgBanking})` }} />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-full p-6 backdrop-blur-sm bg-white/[0.03]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <Landmark className="h-5 w-5 text-white/80" />
              </div>
              <h3 className="text-base font-semibold text-white">Banking Lucy</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                tailors messages using AUM, branch footprint, segment (retail / SME / corporate) and regulatory context.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
          className="relative h-[220px] rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgPlus})` }} />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-full p-6 backdrop-blur-sm bg-white/[0.03]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <Plus className="h-5 w-5 text-white/80" />
              </div>
              <h3 className="text-base font-semibold text-white">More Lucy</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Add more Lucys for healthcare, real estate, manufacturing—and any niche you target.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Block 3: Process section */}
        <ProcessScroller />
        
        <section className="py-16 px-4 scroll-mt-12" id="features">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">What Lucy can do</h2>
              <p className="text-white/70 mt-3 max-w-3xl mx-auto">
                From research to deliverability to personalization—Lucy handles the heavy lifting so you get consistent meetings.
              </p>
            </div>

            <div className="space-y-10">
              {/* Row 2: small-left + wide-right */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <FeatureCard
                  title="Prospect research at scale"
                  description="Mines firmographic, technographic, intent and personal-interest data in seconds."
                  className="h-[240px]"
                  image = {imgInsurance}
                />

                <FeatureCard
                  title="Deliverability management"
                  description="Warms up mailboxes, monitors health and adjusts sending limits so emails avoid spam."
                  className="h-[240px] md:col-span-2"
                  image = {imgInsurance}
                />
              </div>

              {/* Row 3: wide-left + small-right */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <FeatureCard
                  title="Personalization engine"
                  description="References websites, news, job changes and more to write messages that feel 100% human."
                  className="h-[240px] md:col-span-2"
                  image = {imgInsurance}
                />

                <FeatureCard
                  title="Self-optimizing SDR"
                  description="Learns from your feedback and reply data to keep improving her copy and targeting over time."
                  className="h-[240px]"
                  image = {imgInsurance}
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
