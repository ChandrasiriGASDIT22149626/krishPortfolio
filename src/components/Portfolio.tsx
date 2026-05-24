import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Image as ImageIcon } from 'lucide-react';
const mainProjects = [
{
  company: 'AgroVista Plantation',
  category: 'Social Media Marketing / Branding',
  description:
  'Created promotional content, branding concepts, product marketing posts, and social media creatives.',
  image:
  'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  link: 'https://drive.google.com/drive/folders/1ZJ4WOaab1P7vPe5ThOt2FwI4Js_fFrKO',
  tags: ['Branding', 'Social Media', 'Promotions']
},
{
  company: 'Vista Solar',
  category: 'Solar Energy Branding / Digital Promotions',
  description:
  'Designed branding concepts, promotional posters, awareness content, and digital marketing creatives.',
  image:
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  link: 'https://drive.google.com/drive/folders/1a3XObNNSNk3Ij_pxkHqLO8CA4mNJ9DK7',
  tags: ['Solar Energy', 'Digital Marketing', 'Posters']
},
{
  company: 'GoGlobal Express',
  category: 'Logistics Marketing / Advertisement Creatives',
  description:
  'Created social media posts, promotional posters, logistics branding materials, advertisement creatives, and customer engagement campaigns.',
  image:
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  link: 'https://drive.google.com/drive/folders/11OkeZ1UVrcxSTkUL2Vi4ugSYjb1AV-3E',
  tags: ['Logistics', 'Ads', 'Engagement']
}];

const extraCategories = [
'Promotional Campaigns',
'Brand Awareness Posts',
'Product Marketing Designs',
'Short Video Ads',
'Social Media Reels',
'Customer Engagement Campaigns'];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative z-10">
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
            Creative Works –{' '}
            <span className="text-gradient">Posts & Videos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my digital marketing campaigns, branding concepts, and
            creative designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainProjects.map((project, idx) =>
          <motion.div
            key={idx}
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
            transition={{
              delay: idx * 0.1
            }}
            className="glass-card overflow-hidden group flex flex-col h-full hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500">
            
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                src={project.image}
                alt={project.company}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-medium bg-navy-900/80 backdrop-blur-md text-white rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {project.company}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) =>
                <span
                  key={i}
                  className="text-xs text-neon-purple bg-neon-purple/10 px-2 py-1 rounded-md">
                  
                      #{tag}
                    </span>
                )}
                </div>

                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 text-sm font-medium transition-all group-hover:border-neon-cyan/50">
                
                  <ExternalLink size={16} />
                  View on Google Drive
                </a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Extra Categories */}
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
          className="glass-card p-8 rounded-2xl">
          
          <h3 className="text-xl font-bold mb-6 text-center">
            More Portfolio Categories
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {extraCategories.map((cat, idx) =>
            <div
              key={idx}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm flex items-center gap-2 hover:border-neon-purple/50 hover:text-white transition-colors cursor-default">
              
                {cat.includes('Video') || cat.includes('Reels') ?
              <Play size={14} className="text-neon-magenta" /> :

              <ImageIcon size={14} className="text-neon-cyan" />
              }
                {cat}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}