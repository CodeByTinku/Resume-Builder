import React from 'react';
import EditorPanel from './components/editor/EditorPanel';
import PreviewPanel from './components/preview/PreviewPanel';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      {/* Editor Pane */}
      <div className="w-full md:w-1/2 lg:w-2/5 h-screen overflow-y-auto bg-white border-r border-slate-200 shadow-xl z-10">
        <EditorPanel />
      </div>

      {/* Preview Pane */}
      <div className="w-full md:w-1/2 lg:w-3/5 h-screen overflow-y-auto bg-slate-100 p-4 md:p-8 flex justify-center items-start">
        <PreviewPanel />
      </div>
    </div>
  );
}

export default App;
