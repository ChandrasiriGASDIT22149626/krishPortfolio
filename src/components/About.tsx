import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Zap } from 'lucide-react';
export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="md:col-span-7 space-y-6">
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate and creative{' '}
              <strong className="text-white">Digital Marketer</strong> with
              experience in social media management, branding, graphic design,
              logistics marketing, and customer engagement. I specialize in
              creating engaging promotional content, managing social media
              campaigns, and improving brand visibility through modern digital
              marketing strategies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I also have experience integrating{' '}
              <strong className="text-neon-cyan">
                AI tools, workflow automation, CGI short video ads, and creative
                content strategies
              </strong>{' '}
              to help businesses grow efficiently in the digital space. My goal
              is to combine creativity with technology to build impactful
              digital experiences and strong online brands.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="md:col-span-5 grid gap-4">
            
            <div className="glass-card p-6 flex items-start gap-4 glass-card-hover">
              <div className="p-3 rounded-lg bg-neon-purple/10 text-neon-purple">
                <Target size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Strategic Growth</h3>
                <p className="text-sm text-gray-400">
                  Improving brand visibility through modern digital marketing
                  strategies.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 glass-card-hover">
              <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Creative Content</h3>
                <p className="text-sm text-gray-400">
                  Designing engaging promotional content and CGI short video
                  ads.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 glass-card-hover">
              <div className="p-3 rounded-lg bg-neon-magenta/10 text-neon-magenta">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">AI & Automation</h3>
                <p className="text-sm text-gray-400">
                  Integrating AI tools and workflow automation for efficient
                  business growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}