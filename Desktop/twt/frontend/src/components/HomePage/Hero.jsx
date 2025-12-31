import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '../shared/AnimatedButton';
// import heroBg from "../../assets/hero-bg-arc.png";
import { Mail, Target, TrendingUp } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-28">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-violet rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-purple rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Sharp vignette overlay (hero only)
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.95)_78%,rgba(0,0,0,1)_100%)]" />
      </div> */}

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base md:text-lg text-gray-300 mb-4 max-w-3xl mx-auto"> {/*text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto*/}
            Tired of hiring and training SDRs for months and still not getting meetings?
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            <span className="bg-brand-white bg-clip-text text-transparent">
              Meet
            </span>
            <span> </span>
            <span className="relative inline-block">
              <div className="absolute inset-0 -z-10 bg-brand-orange/50 rounded-full filter blur-3xl animate-breath" />
              <span className="bg-brand-orange bg-clip-text text-transparent">
               Lucy
              </span>
            </span><br />
            
            <span className="bg-brand-white bg-clip-text text-transparent">
              your AI SDR from
            </span>
            <span> </span>
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              FirstScience AI.
            </span>
          </h1>
           
          <p className="text-base md:text-lg text-gray-300 mb-2 max-w-3xl mx-auto">
            A 24×7 outbound agent that sends hyper-personalized emails <br />so your calendar stays full of qualified meetings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-1">

            <div className="flex flex-col items-center text-center py-6 px-4">
              
              <span className="mt-3 text-base font-medium text-white/80">
              {/* <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-white/90" strokeWidth={1.5} />
              </div> */}
                Always-on outbound cold email
              </span>
            </div>

            <div className="relative flex flex-col items-center text-center py-6 px-4">

              <div className="absolute left-0 top-1/4 h-1/2 border-l border-white/15"></div>
              {/* <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-white/90" strokeWidth={1.5} />
              </div> */}
              <span className="mt-3 text-base font-medium text-white/80">
                Hyper-personalized messages
              </span>
            </div>


            <div className="relative flex flex-col items-center text-center py-6 px-4">
              <div className="absolute left-0 top-1/4 h-1/2 border-l border-white/15"></div>
              {/* <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white/90" strokeWidth={1.5} />
              </div> */}
              <span className="mt-3 text-base font-medium text-white/80">
                No extra headcount
              </span>
            </div>
          </div>



          <br />

          <div className="flex gap-6 justify-center">
            <AnimatedButton
              variant="primary"
              onClick={() => navigate('/login')}
              className="text-lg"
            >
              Hire Lucy
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              className="text-lg"
            >
              See Lucy in action
            </AnimatedButton>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[
              { value: '410,000+', label: 'Prospects Reached' },
              { value: '24,600+', label: 'Total Replies' },
              { value: '8,200+', label: 'Positive Replies' },
              { value: '3,200+', label: 'Meetings Booked' }
            ].map((stat, index) => (
              <div key={index} className="glass-strong rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

//   return (
//     <section className="pt-28 pb-16 px-4">
      
//       {/* <div className="max-w-7xl mx-auto">
//         HERO CARD FRAME */}
//         <div className="relative overflow-hidden rounded-[42px] border border-white/10 shadow-2xl">
//           {/* Background image layer (replace with your own) */}
//           <div
//             className="absolute inset-0 bg-cover bg-center -z-10"
//             style={{
//               backgroundImage: `url(${heroBg})`
//             }}
//           />

//           {/* Dark overlay for readability */}
//           <div className="absolute inset-0 bg-black/60" />

//           {/* Sharp vignette (hero only) */}
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.88)_75%,rgba(0,0,0,1)_100%)]" />

//           {/* Subtle tech grid overlay (optional, remove if you don’t want it) */}
//           <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:64px_64px]" />

//           {/* Content */}
//           <div className="relative z-10 min-h-[72vh] flex items-center">
//             <div className="w-full px-8 md:px-12 py-14">
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 {/* Left copy */}
//                 <div className="text-center lg:text-left">
//                   <motion.div
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//                       Outcome Based AI <br />
//                       <span className="bg-gradient-to-r from-primary-pink via-primary-teal to-primary-blue bg-clip-text text-transparent">
//                         Outbound is Here
//                       </span>
//                     </h1>

//                     <p className="mt-6 text-lg md:text-xl text-gray-200/90 max-w-2xl">
//                       Guaranteed qualified meetings on your calendar. Zero headcount.
//                       Zero tool chaos.
//                     </p>

//                     <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                       <motion.button
//                         onClick={() => navigate("/login")}
//                         className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-blue to-primary-teal"
//                         whileHover={{ scale: 1.04 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         Get Started Free
//                       </motion.button>

//                       <motion.button
//                         onClick={() =>
//                           document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
//                         }
//                         className="px-6 py-3 rounded-xl font-semibold text-white/90 border border-white/20 bg-white/5 hover:bg-white/10 transition"
//                         whileHover={{ scale: 1.04 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         Book a demo
//                       </motion.button>
//                     </div>

//                     {/* quick trust bullets (optional) */}
//                     <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-gray-300/90">
//                       <span className="flex items-center gap-2">
//                         <span className="h-2 w-2 rounded-full bg-primary-teal" />
//                         Guaranteed meetings
//                       </span>
//                       <span className="flex items-center gap-2">
//                         <span className="h-2 w-2 rounded-full bg-primary-pink" />
//                         No tool chaos
//                       </span>
//                       <span className="flex items-center gap-2">
//                         <span className="h-2 w-2 rounded-full bg-primary-blue" />
//                         Human + AI
//                       </span>
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Right visual (put Lottie / vector here) */}
//                 <div className="relative hidden lg:block">
//                   <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-[520px]">
//                     {/* Replace this placeholder with your Lottie component */}
//                     <div className="h-[420px] w-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Optional: bottom highlight line */}
//           <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
//         </div>
//       {/* </div> */}
//     </section>
//   );
// };

export default Hero;
