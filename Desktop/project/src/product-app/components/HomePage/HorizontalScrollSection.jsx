import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BRAND } from "../../config/constants";

const steps = [
  {
    title: `You tell ${BRAND.NAME} who to go after`,
    desc: "Define ICP, segments (insurance, IT, banking), geotarget, employee size and titles.",
    // img: "https://images.unsplash.com/photo-1645811791240-b45cc9534903?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    img: "https://images.unsplash.com/photo-1768330005064-ed4bed7a5dc3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: `${BRAND.NAME} finds and researches leads for you`,
    desc: "Uses B2B data, web signals, hiring, funding and tech stack to build rich profiles.",
    // img: "https://images.unsplash.com/photo-1645811791240-b45cc9534903?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    img : " https://images.unsplash.com/photo-1766583066465-68ab23171b9d?q=80&w=287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: `${BRAND.NAME} writes and sends hyper-personalized sequences`,
    desc: "Multi-step outbound email campaigns, personalized 1:1 for every prospect.",
    // img: "https://images.unsplash.com/photo-1645811791240-b45cc9534903?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    img: "https://images.unsplash.com/photo-1766851265130-a2d5909927df?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: `${BRAND.NAME} hands you only hot replies`,
    desc: "Uses sentiment analysis to detect interest and routes qualified responses straight to your inbox.",
    // img: "https://images.unsplash.com/photo-1645811791240-b45cc9534903?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    img: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

function StepCard({ step, idx, translateX }) {
  return (
    // <motion.div
    //   style={{ x: translateX }}
    //   {/* className="relative rounded-2xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm shadow-2xl flex-shrink-0" */}
    //   className="relative w-full h-full rounded-2xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm shadow-2xl flex-shrink-0"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5, delay: idx * 0.1 }}
    // >
    //   <div
    //     className="absolute inset-0 bg-cover bg-center"
    //     style={{ backgroundImage: `url("${step.img}")` }}
    //   />
    //   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-gray-900/60" />

    //   <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-center">
    //     <div className="flex items-start gap-3 md:gap-4">
    //       <div className="h-10 w-10 md:h-11 md:w-11 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-semibold flex-shrink-0">
    //         {String(idx + 1).padStart(2, "0")}
    //       </div>

    //       <div className="flex-1">
    //         <h3 className="text-white font-semibold text-xl md:text-2xl mb-2 md:mb-3">{step.title}</h3>
    //         <p className="text-gray-300 text-sm leading-6">
    //           {step.desc}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </motion.div> 
    <motion.div
      style={{ x: translateX }}
      // className="relative rounded-2xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm shadow-2xl flex-shrink-0"
      className="relative w-full h-full rounded-2xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm shadow-2xl flex-shrink-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${step.img}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-gray-900/90" />

      <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-center">
        <div className="flex items-start gap-3 md:gap-4">
          <div className="h-10 w-10 md:h-11 md:w-11 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-semibold flex-shrink-0">
            {String(idx + 1).padStart(2, "0")}
          </div>

          <div className="flex-1">
            <h3 className="text-white font-semibold text-xl md:text-2xl mb-2 md:mb-3">{step.title}</h3>
            <p className="text-gray-300 text-sm leading-6">
              {step.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.scrollHeight - window.innerHeight;
      const scrollTop = -rect.top;

      const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));
      setScrollProgress(progress);
    };

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = dimensions.width < 768;
  const isTablet = dimensions.width >= 768 && dimensions.width < 1024;

  const cardWidth = isMobile ? 280 : isTablet ? 500 : 660;
  const cardGap = isMobile ? 24 : isTablet ? 32 : 40;
  const totalWidth = (cardWidth + cardGap) * steps.length;

  // const getTranslateX = (index) => {
  //   const baseOffset = index * (cardWidth + cardGap);
  //   const viewportWidth = dimensions.width;
  //   const maxScroll = totalWidth - viewportWidth + (isMobile ? 100 : 200);

  //   const speed = 1 + (index * 0.15);
  //   return -scrollProgress * maxScroll * speed + baseOffset;
  // };

  const getTranslateX = (index) => {
    const baseOffset = index * (cardWidth + cardGap);
    const centerOffSet = (dimensions.width - cardWidth) /2;
    const maxScroll = (steps.length-1) *(cardWidth + cardGap);
    // const clampedProgress = Math.max(0,Math.min(1, scrollProgress)) 

    const HOLD_AT_END = 0.25; // 25% hold (increase if you want more pause)

  const effectiveProgress = Math.max(
    0,
    Math.min(1, scrollProgress / (1 - HOLD_AT_END))
  );
    // const viewportWidth = dimensions.width;
    // // const maxScroll = totalWidth - viewportWidth + (isMobile ? 100 : 200);

    // const speed = 1 + (index * 0.15);
    // return -scrollProgress * maxScroll * speed + baseOffset;
    return baseOffset - effectiveProgress * maxScroll + centerOffSet
  };

  const cardHeight = isMobile ? 320 : 360;
  const containerHeight = isMobile ? 380 : 300;

  return (
    <section ref={containerRef} className="relative py-4 px-4 scroll-mt-24" style={{ height: '300vh' }} id="how">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              How {" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">{BRAND.NAME}</span>{" "} works
            </h2>
          </div>

          <div className="relative w-full overflow-visible">
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent z-0" />

            <div className="relative flex items-center" style={{ height: `${containerHeight}px` }}>
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="absolute"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transform: `translateX(${getTranslateX(idx)}px)`,
                    transition: 'transform 0.1s linear'
                  }}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute -inset-4 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
                    <StepCard step={step} idx={idx} translateX={0} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <div className="flex items-center justify-center gap-2">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(scrollProgress * steps.length) === idx
                      ? 'w-8 bg-orange-500'
                      : 'w-2 bg-gray-600'
                  }`}
                />
              ))}
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}
