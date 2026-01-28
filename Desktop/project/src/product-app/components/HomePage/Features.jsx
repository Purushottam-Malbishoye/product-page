
// new features section:
import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../shared/GlassCard";
import { ShieldCheck, Cpu, Landmark, Plus } from "lucide-react";
import HorizontalScrollSection from "../HomePage/HorizontalScrollSection";
import { BRAND } from "../../config/constants";

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

const FeatureCard = ({ title, description, className = "" }) => (
  // <div
  //   className={`relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-7 ${className}`}
  // >
  <div
    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out group scroll-mt-24 ${className}`}
  >
    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

    <div className="relative z-10">
      {/* <h3 className="text-xl font-semibold text-white">{title}</h3> */}
      <h3 className = "text-2xl font-bold text-white mb-4">{title}</h3>
      {/* <p className="mt-3 text-sm leading-6 text-gray-300">{description}</p> */}
      <p className = "text-gray-300 mb-6 leading-relaxed">{description}</p>
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
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">{BRAND.NAME}</span>, your AI SDR
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            automates the full SDR workflow for each industry you sell into.
          </p>
        </div>

        {/* industry cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out group scroll-mt-24 overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgInsurance})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/85 to-gray-900/70" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20 border border-orange-500/30 group-hover:bg-orange-500/30 group-hover:scale-110 transition-all duration-300">
                <ShieldCheck className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Insurance {BRAND.NAME}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Speaks the language of policies, premiums, claims, compliance and risk so outreach sounds like an expert, not a bot.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out group scroll-mt-24 overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-bottom" style={{ backgroundImage: `url(${imgIT})` }} />  
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/85 to-gray-900/70" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                <Cpu className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">IT / SaaS {BRAND.NAME}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                personalizes on tech stack, tools in use and role-specific pains for CTO, CISO, Product, and RevOps.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out group scroll-mt-24 overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgBanking})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/85 to-gray-900/70" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20 border border-orange-500/30 group-hover:bg-orange-500/30 group-hover:scale-110 transition-all duration-300">
                <Landmark className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Banking {BRAND.NAME}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                tailors messages using AUM, branch footprint, segment (retail / SME / corporate) and regulatory context.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 ease-in-out group scroll-mt-24 overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgPlus})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/85 to-gray-900/70" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                <Plus className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">More {BRAND.NAME}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Add more {BRAND.NAME}s for healthcare, real estate, manufacturing—and any niche you target.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Block 3: Process section */}
        <HorizontalScrollSection />
        
        
        {/* Block 4 : What Luci can do section */}

        {/* < LuciCapabilities /> */}

        
        <section className="py-16 px-4 scroll-mt-12" id="features">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">What{" "} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">{BRAND.NAME}</span>{" "} can do</h2>
              <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
                From research to deliverability to personalization, {BRAND.NAME} handles the heavy lifting so you get consistent meetings.
              </p>
            </div>

            <div className="space-y-10">
          
              {/* Row 2: small-left + wide-right */}
        
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
 */}
              {/* Row 3: wide-left + small-right */}
        
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
              </div> */}

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

                <FeatureCard
                  title="Prospect research at scale"
                  description="Mines firmographic, technographic, intent and personal-interest data in seconds."

                  image = {imgInsurance}
                />

                  <FeatureCard
                  title="Deliverability management"
                  description="Warms up mailboxes, monitors health and adjusts sending limits so emails avoid spam."

                  image = {imgInsurance}
                />

                 <FeatureCard
                  title="Personalization engine"
                  description="References websites, news, job changes and more to write messages that feel 100% human."

                  image = {imgInsurance}
                />

                 <FeatureCard
                  title="Self-optimizing SDR"
                  description="Learns from your feedback and reply data to keep improving her copy and targeting over time."

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
