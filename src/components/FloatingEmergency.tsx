import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import {
  MessageCircle,
  Phone,
  Clock,
  Percent,
  X,
  Sparkles
} from 'lucide-react';

interface FloatingEmergencyProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const FloatingEmergency: React.FC<FloatingEmergencyProps> = ({
  lang,
  onOpenBooking
}) => {
  const isRu = lang === 'ru';
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      {/* Promo banner floating bubble */}
      {!minimized && (
        <div className="hidden sm:flex items-center gap-2.5 bg-slate-900/95 text-white p-2.5 pl-3.5 pr-2 rounded-2xl shadow-xl border border-slate-700/80 text-xs backdrop-blur-sm animate-bounce-short">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
          <span className="font-semibold text-teal-300">24/7</span>
          <span className="text-slate-200">
            {isRu ? 'Острая боль? Принимаем прямо сейчас!' : 'Тіс ауырды ма? Қазір қабылдаймыз!'}
          </span>
          <button
            type="button"
            onClick={() => setMinimized(true)}
            className="text-slate-400 hover:text-white p-1 ml-1"
            title="Свернуть"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Buttons bar */}
      <div className="flex items-center gap-2 bg-white/90 p-1.5 rounded-2xl shadow-xl border border-slate-200/90 backdrop-blur-md">
        {/* Direct Call Button */}
        <a
          href={`tel:${CLINIC_INFO.phone2Clean}`}
          className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-transform hover:scale-105 shadow-xs"
          title={isRu ? 'Позвонить дежурному врачу' : 'Кезекші дәрігерге қоңырау шалу'}
        >
          <Phone className="w-5 h-5 text-teal-400" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={CLINIC_INFO.whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 font-bold text-xs shadow-md shadow-emerald-600/30 transition-transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp 24/7</span>
        </a>
      </div>
    </div>
  );
};
