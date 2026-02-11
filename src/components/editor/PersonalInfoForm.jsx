import React from 'react';
import useResumeStore from '../../store/useResumeStore';

const PersonalInfoForm = () => {
  const { resume, updatePersonalInfo } = useResumeStore();
  const { personalInfo } = resume;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo(name, value);
  };

  return (
    <div className="space-y-4 bg-white p-6 rounded-lg border border-slate-200">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
           <input
            type="text"
            name="jobTitle"
            value={personalInfo.jobTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Software Engineer"
          />
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            type="text"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 234 567 890"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={personalInfo.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="New York, NY"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn</label>
            <input
                type="text"
                name="linkedin"
                value={personalInfo.linkedin}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="linkedin.com/in/john"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Website</label>
            <input
                type="text"
                name="website"
                value={personalInfo.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="johndoe.com"
            />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Professional Summary</label>
        <textarea
          name="summary"
          value={personalInfo.summary}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Experienced software engineer with..."
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
