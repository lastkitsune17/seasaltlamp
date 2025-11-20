import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Linkedin, Twitter, Github } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet the Creators</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The brilliant minds and passionate souls who spent the last two years bringing Lumina to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center group">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-slate-50 group-hover:ring-blue-100 transition-all">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-4">{member.role}</p>
              <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-4 opacity-60 group-hover:opacity-100 transition-opacity">
                {member.socials?.twitter && (
                  <a href={member.socials.twitter} className="text-slate-400 hover:text-blue-400 transition-colors">
                    <Twitter size={18} />
                  </a>
                )}
                {member.socials?.linkedin && (
                  <a href={member.socials.linkedin} className="text-slate-400 hover:text-blue-700 transition-colors">
                    <Linkedin size={18} />
                  </a>
                )}
                {member.socials?.github && (
                  <a href={member.socials.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                    <Github size={18} />
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