import React from 'react';
import useResumeStore from '../../store/useResumeStore';
import { Trash2, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const EducationForm = () => {
  const { resume, addEducation, removeEducation, updateEducation } = useResumeStore();
  const { education } = resume;

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateEducation(id, name, value);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-slate-800">Education</h2>
        <button
          onClick={addEducation}
          className="flex items-center gap-2 text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors"
        >
          <Plus size={16} /> Add Education
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 border border-slate-200 rounded-md bg-slate-50 relative group"
            >
              <button
                onClick={() => removeEducation(edu.id)}
                className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                title="Remove Education"
              >
                <Trash2 size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 pr-8">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">School / University</label>
                  <input
                    type="text"
                    name="school"
                    value={edu.school}
                    onChange={(e) => handleChange(edu.id, e)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500"
                    placeholder="Stanford University"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Degree</label>
                  <input
                    type="text"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleChange(edu.id, e)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500"
                    placeholder="Bachelor of Science"
                  />
                </div>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Field of Study</label>
                  <input
                    type="text"
                    name="fieldOfStudy"
                    value={edu.fieldOfStudy}
                    onChange={(e) => handleChange(edu.id, e)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500"
                    placeholder="Computer Science"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Graduation Date</label>
                  <input
                    type="text"
                    name="graduationDate"
                    value={edu.graduationDate}
                    onChange={(e) => handleChange(edu.id, e)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500"
                    placeholder="May 2024"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {education.length === 0 && (
          <div className="text-center py-8 text-slate-400 border-2 border-dashed border-slate-200 rounded-lg">
            No education added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationForm;
