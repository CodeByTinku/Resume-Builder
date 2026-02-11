# React Real-time Resume Builder

A modern, responsive, and real-time WYSIWYG (What You See Is What You Get) Resume Builder application. Built with React and Vite, this tool allows users to craft professional resumes with instant visual feedback and export them as ATS-compatible PDFs.

![Resume Builder Demo](vercel.link here) 


## ✨ Features

- **Real-Time Editing**: Split-screen interface with a form editor on the left and a live A4 preview on the right.
- **Live Preview**: See your changes instantly as you type.
- **ATS-Friendly Export**: One-click download of a high-quality PDF that retains selectable text (essential for Applicant Tracking Systems).
- **Responsive Design**: Mobile-friendly layout (stacked view on mobile, split view on desktop).
- **Interactive Forms**: Easily add, remove, and manage Education, Experience, and Skills sections.
- **Modern UI**: Styled with TailwindCSS for a clean and professional look.

## 🛠️ Tech Stack

- **[React](https://react.dev/)**: Frontend library for building the user interface.
- **[Vite](https://vitejs.dev/)**: Fast build tool and development server.
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.
- **[Zustand](https://zustand-demo.pmnd.rs/)**: Lightweight explanation state management.
- **[@react-pdf/renderer](https://react-pdf.org/)**: Powerful React-based PDF generation.
- **[Lucide React](https://lucide.dev/)**: Beautiful and consistent icons.
- **[Framer Motion](https://www.framer.com/motion/)**: For smooth UI animations.

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/resume-builder.git
    cd resume-builder
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see the app in action.


## 📂 Project Structure

```
src/
├── components/
│   ├── editor/          # Form components (Personal, Experience, etc.)
│   └── preview/         # Live preview and PDF download controls
├── store/
│   └── useResumeStore.js # Global state management (Zustand)
├── templates/
│   ├── ModernTemplate.jsx # HTML/React component for Live Preview
│   └── ModernPDF.jsx      # React-PDF Document for PDF Generation
├── App.jsx              # Main layout component
└── main.jsx             # Entry point
```

## 🤝 contributing

Contributions are welcome! If you have suggestions for more templates or features (like local storage persistence or image uploads), feel free to open an issue or submit a pull request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
