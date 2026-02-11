import React from 'react';
import useResumeStore from '../../store/useResumeStore';
import ModernTemplate from '../../templates/ModernTemplate';
import ModernPDF from '../../templates/ModernPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, Loader2 } from 'lucide-react';

const PreviewPanel = () => {
  const { resume } = useResumeStore();

  return (
    <div className="flex flex-col items-center w-full">
      {/* Toolbar */}
      <div className="w-full bg-slate-800 text-white p-4 rounded-lg shadow-lg mb-8 flex justify-between items-center sticky top-4 z-20">
        <h2 className="font-semibold text-lg">Live Preview</h2>
        
        <PDFDownloadLink
          document={<ModernPDF resume={resume} />}
          fileName={`${resume.personalInfo.fullName.replace(' ', '_')}_Resume.pdf` || 'Resume.pdf'}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-sm font-medium"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Preparing PDF...
              </>
            ) : (
              <>
                <Download size={16} /> Download PDF
              </>
            )
          }
        </PDFDownloadLink>
      </div>

      {/* A4 Container */}
      <div className="mt-[100px] relative shadow-2xl border border-slate-300 bg-white origin-top" style={{ transform: 'scale(0.8) translateY(-10%)', marginBottom: '-20%' }}>
         {/* 
            Scaling down slightly for better view on laptop screens.
            In a real app, I'd calculate scale based on viewport width.
         */}
         <div className="transform origin-top-left"> {/* Wrapper if needed */}
             <ModernTemplate />
         </div>
      </div>
      
      {/* Mobile-only notice */}
      <div className="md:hidden text-center text-slate-500 mt-8 mb-12 text-sm">
        <p>Preview is best viewed on Desktop.</p>
      </div>
    </div>
  );
};

export default PreviewPanel;
