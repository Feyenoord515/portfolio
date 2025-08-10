import React from "react";

const FILES = {
  pdf: {
    href: "/Nahuel-Enrique-Molinari-CV.pdf",
    name: "Nahuel-Enrique-Molinari-CV.pdf",
    label: "PDF",
  },
  docx: {
    href: "/Nahuel-Enrique-Molinari-CV.docx",
    name: "Nahuel-Enrique-Molinari-CV.docx",
    label: "DOCX",
  },
};

export default function CvDownload() {
  const [open, setOpen] = React.useState(false);
  const [remember, setRemember] = React.useState(false);
  const [preferred, setPreferred] = React.useState(null); // 'pdf' | 'docx' | null
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("cvPreferredFormat");
      if (saved === "pdf" || saved === "docx") setPreferred(saved);
    } catch {}
  }, []);

  React.useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const download = (fmt) => {
    const f = FILES[fmt];
    if (!f) return;
    try {
      const a = document.createElement("a");
      a.href = f.href;
      a.download = f.name;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } finally {
      setOpen(false);
    }
  };

  const onTrigger = () => {
    if (preferred) {
      download(preferred);
    } else {
      setOpen((v) => !v);
    }
  };

  const onChoose = (fmt) => {
    if (remember) {
      try { localStorage.setItem("cvPreferredFormat", fmt); } catch {}
      setPreferred(fmt);
    }
    download(fmt);
  };

  const suffix = preferred ? ` (${FILES[preferred].label})` : "";

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={onTrigger}
        className="inline-flex items-center bg-emerald-600/90 hover:bg-emerald-500 text-white border-0 py-2 px-3 rounded text-sm shadow-sm"
        title="Descargar CV"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Descargar CV{suffix}
        <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.184l3.71-3.953a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Seleccionar formato de CV"
          className="absolute right-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded shadow-xl p-3 z-20"
        >
          <div className="text-slate-100 text-sm font-medium mb-2">Formato de CV</div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              onClick={() => onChoose("pdf")}
              className="px-3 py-2 rounded bg-slate-700 hover:bg-slate-600 text-slate-100 text-sm"
            >
              PDF
            </button>
            <button
              onClick={() => onChoose("docx")}
              className="px-3 py-2 rounded bg-slate-700 hover:bg-slate-600 text-slate-100 text-sm"
            >
              DOCX
            </button>
          </div>
          <label className="flex items-center gap-2 text-slate-300 text-xs">
            <input
              type="checkbox"
              className="accent-emerald-500"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Recordar esta elección
          </label>
        </div>
      )}
    </div>
  );
}
