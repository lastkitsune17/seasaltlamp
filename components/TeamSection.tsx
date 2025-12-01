
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="scroll-mt-24 py-32 bg-gradient-to-b from-white to-sea-100 dark:from-sea-900 dark:to-sea-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-sea-950 dark:text-white mb-6">Meet the Creators</h2>
          <p className="text-lg text-sea-700 dark:text-sea-300 max-w-2xl mx-auto">
            The brilliant minds and passionate souls navigating the currents of innovation to bring Salt Lamp to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] bg-white dark:bg-sea-800/60 rounded-3xl p-8 shadow-lg shadow-sea-100/50 dark:shadow-black/30 hover:shadow-2xl hover:shadow-cyan-100/50 dark:hover:shadow-cyan-900/20 hover:-translate-y-2 transition-all duration-300 text-center group border border-white dark:border-sea-700/50">
              <div className="relative w-36 h-36 mx-auto mb-8 rounded-full p-1.5 bg-gradient-to-tr from-cyan-300 to-sea-400 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-sea-800">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-sea-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-wide mb-5 uppercase text-xs">{member.role}</p>
              <p className="text-sea-600 dark:text-sea-400 text-sm mb-8 leading-relaxed opacity-80">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-5 opacity-60 group-hover:opacity-100 transition-opacity pt-4 border-t border-sea-50 dark:border-sea-700">
                {member.socials?.instagram && (
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-sea-400 dark:text-sea-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors transform hover:scale-110">
                    <Instagram size={20} />
                  </a>
                )}
                {member.socials?.twitter && (
                  <a href={member.socials.twitter} className="text-sea-400 dark:text-sea-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors transform hover:scale-110">
                    <Twitter size={20} />
                  </a>
                )}
                {member.socials?.linkedin && (
                  <a href={member.socials.linkedin} className="text-sea-400 dark:text-sea-500 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors transform hover:scale-110">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.socials?.github && (
                  <a href={member.socials.github} className="text-sea-400 dark:text-sea-500 hover:text-sea-900 dark:hover:text-white transition-colors transform hover:scale-110">
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};