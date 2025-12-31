import React from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../shared/AnimatedButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-9xl px-7 py-4">
        <div className="glass-strong rounded-xl px-7 py-2 flex items-center justify-between">
          {/* Left: logo + name */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3"
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary-pink to-primary-teal" />
            <div className="text-white font-semibold text-lg">FirstScience AI</div>
          </button>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <a className="hover:text-white transition" href="#industries">Industries</a>
            <a className="hover:text-white transition" href="#how">How it works</a>
            <a className="hover:text-white transition" href="#features">Features</a>
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-3">
            <AnimatedButton variant="outline" onClick={() => navigate("/login")} 
            className="!text-base !py-1.5 !px-3 !border-brand-orange hover:border-brand-orange/80 transition-shadow">
              Login
            </AnimatedButton>
            <motion.button
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2 rounded-xl font-semibold
              text-base text-white bg-gradient-to-bl from-brand-orange 
              from-0% to-brand-black to-40%
              shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/100 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Watch demo
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
