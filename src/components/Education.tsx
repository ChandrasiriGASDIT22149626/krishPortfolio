import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
const education = [
{
  degree: 'Professional Certificate in Digital Marketing',
  school: 'SLIM',
  year: 'Currently Pursuing'
},
{
  degree: 'Foundation Diploma in Business Management',
  school: '',
  year: '2021'
},
{
  degree: 'G.C.E Advanced Level',
  school: '',
  year: '2020'
},
{
  degree: 'Diploma in ICT & English',
  school: '',
  year: '2018'
},
{
  degree: 'G.C.E Ordinary Level',
  school: '',
  year: '2017'
}];

const certifications = [
'Professional Certificate in Digital Marketing – Sri Lanka Institute of Marketing (SLIM) (Currently Pursuing)',
'Diploma in Business Management',
'Diploma in ICT & English'];

const futureCerts = [
'Google Digital Garage',
'Meta Blueprint',
'HubSpot Academy',
'Google Ads Certifications'];

const languages = [
{
  name: 'English',
  level: 'Fluent'
},
{
  name: 'Sinhala',
  level: 'Fluent'
},
{
  name: 'Tamil',
  level: 'Fluent'
}];

export function Education() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
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
            }}>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-neon-purple/20 text-neon-purple">
                <GraduationCap size={28} />
              </div>
              <h2 className="font-display text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-4">
              {education.map((item, idx) =>
              <div
                key={idx}
                className="glass-card p-5 glass-card-hover flex justify-between items-center">
                
                  <div>
                    <h3 className="font-bold text-white">{item.degree}</h3>
                    {item.school &&
                  <p className="text-sm text-gray-400">{item.school}</p>
                  }
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-neon-cyan border border-white/10 whitespace-nowrap">
                    {item.year}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Certifications & Languages Column */}
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
            className="space-y-12">
            
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-neon-cyan/20 text-neon-cyan">
                  <Award size={28} />
                </div>
                <h2 className="font-display text-3xl font-bold">
                  Certifications
                </h2>
              </div>

              <div className="glass-card p-6 mb-6">
                <ul className="space-y-3">
                  {certifications.map((cert, idx) =>
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300 text-sm">
                    
                      <span className="text-neon-cyan mt-0.5">✓</span>
                      {cert}
                    </li>
                  )}
                </ul>
              </div>

              <h3 className="text-lg font-bold mb-4 text-gray-400 flex items-center gap-2">
                <BookOpen size={18} /> Future Goals
              </h3>
              <div className="flex flex-wrap gap-2">
                {futureCerts.map((cert, idx) =>
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                  
                    {cert}
                  </span>
                )}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">
                Languages
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {languages.map((lang, idx) =>
                <div
                  key={idx}
                  className="glass-card p-4 text-center glass-card-hover">
                  
                    <h4 className="font-bold text-white mb-1">{lang.name}</h4>
                    <p className="text-xs text-neon-purple">{lang.level}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}