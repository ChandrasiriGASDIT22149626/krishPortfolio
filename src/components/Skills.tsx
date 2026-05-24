import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, PenTool, Video, Bot, Briefcase } from 'lucide-react';
const skillCategories = [
{
  title: 'Digital Marketing & Strategy',
  icon: <Megaphone size={24} />,
  color: 'from-blue-500 to-cyan-400',
  skills: [
  'Social Media Marketing',
  'Facebook & Instagram Marketing',
  'Campaign Optimization',
  'Online Advertising',
  'Brand Growth Strategy',
  'Content Planning']

},
{
  title: 'Graphic Designing',
  icon: <PenTool size={24} />,
  color: 'from-purple-500 to-pink-500',
  skills: [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Canva',
  'Promotional Poster Design',
  'Social Media Creatives',
  'Banner Designs']

},
{
  title: 'CGI & Video Editing',
  icon: <Video size={24} />,
  color: 'from-orange-500 to-red-500',
  skills: [
  'CGI Short Video Ads',
  'Reels & Promotional Videos',
  'Video Editing']

},
{
  title: 'AI & Automation',
  icon: <Bot size={24} />,
  color: 'from-emerald-400 to-teal-500',
  skills: [
  'AI Chatbots',
  'Workflow Automation',
  'AI-assisted Content Creation',
  'Website Solutions']

},
{
  title: 'Office & Productivity',
  icon: <Briefcase size={24} />,
  color: 'from-indigo-500 to-purple-500',
  skills: [
  'Microsoft Office Package',
  'Reporting & Documentation',
  'Client Communication']

}];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
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
            Professional <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) =>
          <motion.div
            key={category.title}
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
            className="glass-card p-6 glass-card-hover group">
            
              <div
              className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${category.color} text-white shadow-lg`}>
              
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neon-cyan transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) =>
              <li
                key={sIdx}
                className="flex items-center gap-2 text-gray-400 text-sm">
                
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-neon-purple transition-colors"></span>
                    {skill}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}