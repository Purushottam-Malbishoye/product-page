import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const STEP_GAP_VH = 75;   // how long each step stays active (45–70)
const TAIL_VH = 65;       // extra space after last step so step 4 is visible

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function StepCard({ step, idx }) {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 14, filter: "blur(2px)", scale: 0.99 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      transition={{ type: "spring", stiffness: 170, damping: 24 }}
      className="relative w-full rounded-3xl border border-white/10 overflow-hidden"
      style={{ height: 360 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${step.img}")` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full p-8 bg-white/[0.03] backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/85 font-semibold">
            {String(idx + 1).padStart(2, "0")}
          </div>

          <div className="flex-1">
            <h3 className="text-white font-semibold text-2xl">{step.title}</h3>
            <p className="text-white/75 mt-2 text-sm leading-6 max-w-[62ch]">
              {step.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessScroller() {
  const steps = useMemo(
    () => [
      {
        title: "You tell Lucy who to go after",
        desc: "Define ICP, segments (insurance, IT, banking), geo, employee size and titles.",
        img: "https://images.unsplash.com/photo-1645811791240-b45cc9534903?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Lucy finds and researches leads for you",
        desc: "Uses B2B data, web signals, hiring, funding and tech stack to build rich profiles.",
        img: "https://images.unsplash.com/photo-1645811791240-b45cc9534903?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Lucy writes and sends hyper-personalized sequences",
        desc: "Multi-step outbound email campaigns, personalized 1:1 for every prospect.",
        img: "https://images.unsplash.com/photo-1645811791240-b45cc9534903?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Lucy hands you only hot replies",
        desc: "Uses sentiment analysis to detect interest and routes qualified responses straight to your inbox or Slack.",
        img: "https://images.unsplash.com/photo-1645811791240-b45cc9534903?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    ],
    []
  );
  
  const [activeIdx, setActiveIdx] = useState(0);
  const sentinelsRef = useRef([]);

  useEffect(() => {
    const els = sentinelsRef.current.filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Many entries can be delivered at once; pick the one closest to center band.
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        // Approx: smallest distance to viewport center wins.
        const viewportCenter = window.innerHeight / 2;

        visible.sort((a, b) => {
          const aMid = a.boundingClientRect.top + a.boundingClientRect.height / 2;
          const bMid = b.boundingClientRect.top + b.boundingClientRect.height / 2;
          return Math.abs(aMid - viewportCenter) - Math.abs(bMid - viewportCenter);
        });

        const idx = Number(visible[0].target.dataset.idx);
        setActiveIdx(clamp(idx, 0, steps.length - 1));
      },
      {
        root: null,
        threshold: 0.25,
        // This creates a thin “activation band” around the center (shrunken root). [web:366]
        rootMargin: "-35% 0px -35% 0px",
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [steps.length]);

  const totalHeightVh = steps.length * STEP_GAP_VH + TAIL_VH;

  return (
    <section className="relative py-4 px-4 scroll-mt-24" id="how">
      <div className="max-w-5xl mx-auto">

        {/* Block 2: how lucy works */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How Lucy works
          </h2>
        </div>

        <div className="relative">
          {/* subtle process line */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px
            bg-[linear-gradient(to_bottom,transparent_0%,#F25912_30%,#bc13fe_70%,transparent_100%)]
            shadow shadow-brand-orange/20 z-0" />

          {/* Reserve scroll space */}
          <div className="relative" style={{ height: `${totalHeightVh}vh` }}>
            <div className="h-[220px]" />

            {/* Sticky stage */}
            <div className="sticky top-1/2 -translate-y-1/2 z-20">
              <div className="mx-auto max-w-[660px]">
                {/* The Purple Blob */}
                {/* <div className="absolute inset-0 -z-10 bg-brand-purple/30 blur-[120px] rounded-full scale-50" /> */}
                <div className="absolute inset-0 -z-10 bg-brand-purple/45 rounded-full filter blur-3xl animate-breath" />
                <StepCard step={steps[activeIdx]} idx={activeIdx} />
              </div>
            </div>

            {/* Sentinels: 1px “triggers” at equal distances */}
            <div className="relative">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  style={{ height: `${STEP_GAP_VH}vh` }}
                  className="relative"
                >
                  <div
                    data-idx={idx}
                    ref={(el) => (sentinelsRef.current[idx] = el)}
                    className="h-16"
                  />
                </div>
              ))}

              {/* Tail space so last step remains visible before section ends */}
              <div style={{ height: `${TAIL_VH}vh` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}