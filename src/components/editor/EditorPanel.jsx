import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';

const EditorPanel = () => {
  return (
    <div className="p-4 md:p-8 space-y-8 pb-32">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Resume Builder</h1>
        <p className="text-slate-500">Enter your details below to generate your professional resume.</p>
      </div>

      <PersonalInfoForm />
      <hr className="border-slate-200" />
      <ExperienceForm />
      <hr className="border-slate-200" />
      <EducationForm />
      <hr className="border-slate-200" />
      <SkillsForm />
    </div>
  );
};

export default EditorPanel;
