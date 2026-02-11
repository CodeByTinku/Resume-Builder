import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const useResumeStore = create((set) => ({
  resume: {
    personalInfo: {
      fullName: '',
      jobTitle: '',
      email: '',
      phone: '',
      address: '',
      summary: '',
      linkedin: '',
      website: '',
    },
    experience: [],
    education: [],
    skills: [],
  },
  settings: {
    themeColor: '#2563eb', // blue-600
    templateId: 'modern',
    fontFamily: 'sans',
  },

  // Actions
  updatePersonalInfo: (field, value) =>
    set((state) => ({
      resume: {
        ...state.resume,
        personalInfo: { ...state.resume.personalInfo, [field]: value },
      },
    })),

  addExperience: () =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: [
          ...state.resume.experience,
          {
            id: uuidv4(),
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            current: false,
            description: '',
          },
        ],
      },
    })),

  updateExperience: (id, field, value) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: state.resume.experience.map((exp) =>
          exp.id === id ? { ...exp, [field]: value } : exp
        ),
      },
    })),

  removeExperience: (id) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: state.resume.experience.filter((exp) => exp.id !== id),
      },
    })),

  addEducation: () =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: [
          ...state.resume.education,
          {
            id: uuidv4(),
            school: '',
            degree: '',
            fieldOfStudy: '',
            graduationDate: '',
          },
        ],
      },
    })),

  updateEducation: (id, field, value) =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: state.resume.education.map((edu) =>
          edu.id === id ? { ...edu, [field]: value } : edu
        ),
      },
    })),

  removeEducation: (id) =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: state.resume.education.filter((edu) => edu.id !== id),
      },
    })),

  addSkill: (skill) =>
    set((state) => ({
      resume: {
        ...state.resume,
        skills: [...state.resume.skills, { id: uuidv4(), name: skill }],
      },
    })),

  removeSkill: (id) =>
    set((state) => ({
      resume: {
        ...state.resume,
        skills: state.resume.skills.filter((s) => s.id !== id),
      },
    })),

  updateSettings: (field, value) =>
    set((state) => ({
      settings: { ...state.settings, [field]: value },
    })),
}));

export default useResumeStore;
