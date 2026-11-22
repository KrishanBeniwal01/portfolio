import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl border backdrop-blur-md shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 ${
        isSuccess
          ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-200 shadow-emerald-900/30'
          : 'bg-rose-950/90 border-rose-500/40 text-rose-200 shadow-rose-900/30'
      }`}
      role="status"
    >
      {isSuccess ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
      )}
      <span className="text-sm font-medium">{toast.message}</span>
      <button
        onClick={onClose}
        className="ml-2 p-1 rounded-md hover:bg-white/10 transition-colors"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4 opacity-70 hover:opacity-100" />
      </button>
    </div>
  );
}
