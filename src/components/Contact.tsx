import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Linkedin } from 'lucide-react';
export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Looking for a creative digital marketer to elevate your brand? Let's
            connect and discuss how I can add value to your team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan/20 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href="tel:+940765394600"
                    className="text-lg font-medium hover:text-neon-cyan transition-colors">
                    
                    +94 076 539 4600
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:kisharugan312@gmail.com"
                    className="text-lg font-medium hover:text-neon-purple transition-colors">
                    
                    kisharugan312@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-magenta group-hover:bg-neon-magenta/20 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg font-medium">Kochchikade, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-4">
              <a
                href="https://wa.me/94765394600"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-medium flex items-center justify-center gap-3 hover:bg-[#25D366]/20 transition-all hover:scale-[1.02]">
                
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>

              <a
                href="mailto:kisharugan312@gmail.com"
                className="w-full py-4 px-6 rounded-xl bg-neon-purple/10 border border-neon-purple/30 text-neon-purple font-medium flex items-center justify-center gap-3 hover:bg-neon-purple/20 transition-all hover:scale-[1.02]">
                
                <Mail size={20} />
                Send an Email
              </a>

              <a
                href="https://www.linkedin.com/in/kisharugan-suvendran-b661b629a/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-[#0A66C2] font-medium flex items-center justify-center gap-3 hover:bg-[#0A66C2]/20 transition-all hover:scale-[1.02]">
                
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}