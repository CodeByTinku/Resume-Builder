import React, { useState } from 'react';
import useResumeStore from '../../store/useResumeStore';
import { X, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const SkillsForm = () => {
  const { resume, addSkill, removeSkill } = useResumeStore();
  const { skills } = resume;
  const [newSkill, setNewSkill] = useState('');

  const handleAdd = () => {
    if (newSkill.trim()) {
      addSkill(newSkill.trim());
      setNewSkill('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg border border-slate-200">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Skills</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a skill (e.g. React, Python)"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm group"
            >
              <span>{skill.name}</span>
              <button
                onClick={() => removeSkill(skill.id)}
                className="text-slate-400 hover:text-red-500 transition-colors ml-1"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
         {skills.length === 0 && (
          <div className="text-slate-400 text-sm italic">
            No skills added.
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsForm;
