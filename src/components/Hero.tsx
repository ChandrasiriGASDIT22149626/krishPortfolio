import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Eye } from 'lucide-react';
export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-start lg:items-center pt-32 lg:pt-20 pb-20 relative">

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="flex flex-col gap-6 z-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">
              Available for new opportunities
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">S. Kisharugan</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 font-medium">
            Digital Marketer | Graphic Designer | Social Media Strategist
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
            I combine creativity with technology to build impactful digital
            experiences, strong online brands, and engaging promotional content.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-105">

              View Portfolio <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full glass-card glass-card-hover text-white font-medium flex items-center gap-2">

              Contact Me <Mail size={18} />
            </a>
            <button
              onClick={() => {
                window.open('/krishCV.pdf', '_blank');
                const link = document.createElement('a');
                link.href = '/krishCV.pdf';
                link.download = 'krishCV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-6 py-3 rounded-full glass-card glass-card-hover text-white font-medium flex items-center gap-2">

              Download CV <Download size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: 0.2
          }}
          className="relative z-10 flex justify-center lg:justify-end">

          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glowing rings behind image */}
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-neon-purple/30 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 rounded-full border border-neon-cyan/20 animate-[spin_20s_linear_infinite]"></div>

            {/* Profile Image Placeholder */}
            <div className="absolute inset-12 rounded-full glass-card overflow-hidden border-2 border-white/20 p-2">
              <div className="w-full h-full rounded-full bg-navy-800 flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                {/* Replace src with actual image later */}
                <img
                  src="/krish.jpg"
                  alt="S. Kisharugan"
                  className="w-full h-full object-cover transition-all duration-500" />

              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-16 -left-8 glass-card px-4 py-3 rounded-xl flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
                ✦
              </div>
              <div>
                <p className="text-xs text-gray-400">Expert in</p>
                <p className="text-sm font-bold">Digital Marketing</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute bottom-16 -right-8 glass-card px-4 py-3 rounded-xl flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                🎨
              </div>
              <div>
                <p className="text-xs text-gray-400">Creative</p>
                <p className="text-sm font-bold">Graphic Design</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

}