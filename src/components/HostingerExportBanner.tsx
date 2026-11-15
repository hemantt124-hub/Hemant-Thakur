import React, { useState } from 'react';
import { Download, X, Server, Check } from 'lucide-react';

export const HostingerExportBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <aside
      aria-label="Hostinger deployment package"
      className="fixed bottom-6 left-6 z-50 max-w-sm w-[calc(100vw-3rem)] sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
    >
      <div className="p-4 rounded-2xl bg-[#0e0e18]/95 border border-violet-500/40 shadow-2xl backdrop-blur-xl space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-violet-950/80 border border-violet-700/50 flex items-center justify-center text-violet-300 shrink-0">
              <Server className="w-4 h-4 text-violet-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Hostinger Export Ready</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-slate-400">
                Pre-built for your Hostinger <code className="text-violet-300 font-mono">public_html</code>
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close export banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <a
            href="/hostinger-deploy.zip"
            download="hemantthakur-hostinger-deploy.zip"
            onClick={handleDownload}
            className="flex-1 inline-flex h-9 items-center justify-center gap-2 px-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md transition-all active:scale-95"
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Downloading ZIP...</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download hostinger-deploy.zip</span>
              </>
            )}
          </a>
        </div>
      </div>
    </aside>
  );
};
