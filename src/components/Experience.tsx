import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
const experiences = [
{
  company: 'GoGlobal Express',
  role: 'Logistics Operations / Social Media & Digital Marketing Executive',
  year: '2026',
  responsibilities: [
  'Managed social media pages and promotional campaigns.',
  'Designed marketing graphics and digital advertisements.',
  'Tracked international freight forwarding shipments.',
  'Prepared export invoices and shipping documentation.',
  'Provided customer support and shipment updates.'],

  contributions: [
  'Improved online brand visibility through creative marketing.',
  'Created engaging promotional materials for social platforms.',
  'Supported customer relationship management.']

},
{
  company: 'Agrovista',
  role: 'Social Media & Digital Marketing Executive / Graphic Designer / Head of Consumer Goods',
  year: '2025',
  responsibilities: [
  'Led social media strategies and online advertising campaigns.',
  'Designed promotional graphics and branding materials.',
  'Managed consumer goods sales operations.',
  'Coordinated supplier relations and product promotions.'],

  contributions: [
  'Increased brand visibility through digital campaigns.',
  'Developed engaging promotional content for marketing activities.']

},
{
  company: 'Blockchain Healthcare Group (Pvt) Ltd',
  role: 'Customer Care Executive & Inbounding',
  year: '2024',
  responsibilities: [
  'Managed customer communication and inbound support.',
  'Built strong client relationships.',
  'Assisted customers with product and service information.'],

  contributions: []
}];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
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
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-cyan to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) =>
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: idx * 0.2
              }}
              className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-navy-900 border-2 border-neon-cyan transform -translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_10px_#22d3ee]"></div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 glass-card p-6 md:p-8 glass-card-hover group">
                  <div className="flex items-center gap-2 text-neon-cyan text-sm font-medium mb-2">
                    <Calendar size={16} />
                    <span>{exp.year}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-neon-purple font-medium mb-6">
                    <Briefcase size={16} />
                    <h4>{exp.company}</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                        Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) =>
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2">
                        
                            <span className="text-neon-cyan mt-1">▹</span>
                            {item}
                          </li>
                      )}
                      </ul>
                    </div>

                    {exp.contributions.length > 0 &&
                  <div>
                        <h5 className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider mt-4">
                          Key Contributions
                        </h5>
                        <ul className="space-y-2">
                          {exp.contributions.map((item, i) =>
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2">
                        
                              <span className="text-neon-purple mt-1">✦</span>
                              {item}
                            </li>
                      )}
                        </ul>
                      </div>
                  }
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}