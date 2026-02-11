import React from 'react';
import useResumeStore from '../store/useResumeStore';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const ModernTemplate = () => {
  const { resume } = useResumeStore();
  const { personalInfo, experience, education, skills } = resume;

  return (
    <div 
      className="bg-white shadow-2xl mx-auto"
      style={{ 
        width: '210mm', 
        minHeight: '297mm',
        height: 'auto',
        fontFamily: 'Inter, sans-serif' // Ensuring a clean font
        // 1mm = 3.7795px approx
      }}
    >
        {/* Header */}
      <div className="bg-slate-900 text-white p-8">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{personalInfo.fullName || 'YOUR NAME'}</h1>
        <p className="text-xl text-blue-400 font-medium mb-6">{personalInfo.jobTitle || 'Professional Title'}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
           {personalInfo.address && (
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{personalInfo.address}</span>
            </div>
          )}
          {personalInfo.linkedin && (
             <div className="flex items-center gap-1">
              <Linkedin size={14} />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
           {personalInfo.website && (
             <div className="flex items-center gap-1">
              <Globe size={14} />
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8 grid grid-cols-12 gap-8 text-slate-800">
        {/* Left Column (Main Content) */}
        <div className="col-span-8 space-y-8">
            {/* Summary */}
            {personalInfo.summary && (
            <section>
                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-3">Profile</h3>
                <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                {personalInfo.summary}
                </p>
            </section>
            )}

             {/* Experience */}
             {experience.length > 0 && (
             <section>
                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-4">Experience</h3>
                <div className="space-y-6">
                    {experience.map((exp) => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="font-bold text-slate-800">{exp.position}</h4>
                                <span className="text-sm text-slate-500 italic">
                                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                </span>
                            </div>
                            <div className="text-blue-700 font-medium text-sm mb-2">{exp.company}</div>
                            <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
             )}

             {/* Education */}
             {education.length > 0 && (
            <section>
                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-4">Education</h3>
                 <div className="space-y-4">
                    {education.map((edu) => (
                        <div key={edu.id}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="font-bold text-slate-800">{edu.school}</h4>
                                <span className="text-sm text-slate-500 italic">
                                   {edu.graduationDate}
                                </span>
                            </div>
                            <div className="text-sm text-slate-700">
                                <span className="font-medium text-blue-700">{edu.degree}</span> 
                                {edu.fieldOfStudy && <span> in {edu.fieldOfStudy}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
             )}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="col-span-4 space-y-8">
            {/* Skills */}
            {skills.length > 0 && (
            <section>
                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-4">Skills</h3>
                <ul className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <li key={skill.id} className="bg-slate-100 px-3 py-1 rounded text-sm font-medium text-slate-700">
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </section>
            )}
            
            {/* Could add Languages, Interests here if they existed */}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
