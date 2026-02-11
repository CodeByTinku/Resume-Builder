import React from 'react';
import useResumeStore from '../../store/useResumeStore';
import { Trash2, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ExperienceForm = () => {
  const { resume, addExperience, removeExperience, updateExperience } = useResumeStore();
  const { experience } = resume;

  const handleChange = (id, e) => {
    const { name, value, type, checked } = e.target;
    updateExperience(id, name, type === 'checkbox' ? checked : value);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-slate-800">Experience</h2>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors"
        >
          <Plus size={16} /> Add Position
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 border border-slate-200 rounded-md bg-slate-50 relative group"
            >
              <button
                onClick={() => removeExperience(exp.id)}
                className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                title="Remove Experience"
              >
                <Trash2 size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 pr-8">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={exp.company}
                    onChange={(e) => handleChange(exp.id, e)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500"
                    placeholder="Google"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={exp.position}
                    onChange={(e) => handleChange(exp.id, e)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500"
                    placeholder="Senior Engineer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Start Date</label>
                  <input
                    type="text"
                    name="startDate"
                    value={exp.startDate}
                    onChange={(e) => handleChange(exp.id, e)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500"
                    placeholder="Jan 2020"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">End Date</label>
                  <input
                    type="text"
                    name="endDate"
                    value={exp.endDate}
                    onChange={(e) => handleChange(exp.id, e)}
                    disabled={exp.current}
                    className={`w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 ${exp.current ? 'bg-slate-100 text-slate-400' : ''}`}
                    placeholder="Present"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <input
                  type="checkbox"
                  name="current"
                  checked={exp.current}
                  onChange={(e) => handleChange(exp.id, e)}
                  id={`current-${exp.id}`}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`current-${exp.id}`} className="text-sm text-slate-600">I currently work here</label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Description</label>
                <textarea
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleChange(exp.id, e)}
                  rows="3"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500"
                  placeholder="• Developed backend services..."
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {experience.length === 0 && (
          <div className="text-center py-8 text-slate-400 border-2 border-dashed border-slate-200 rounded-lg">
            No experience added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceForm;
