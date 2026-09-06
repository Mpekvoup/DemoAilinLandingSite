import React from 'react';
import { ADVANTAGES } from '../data/clinicData';
import { Language } from '../types';
import {
  Percent,
  Clock,
  Sparkles,
  Microscope,
  Scan,
  MapPin,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

interface PromoAndAdvantagesProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const PromoAndAdvantages: React.FC<PromoAndAdvantagesProps> = ({
  lang,
  onOpenBooking
}) => {
  const isRu = lang === 'ru';

  const iconMap: Record<string, React.ElementType> = {
    Percent,
    Clock,
    Sparkles,
    Microscope,
    Scan,
    MapPin
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {isRu ? 'Почему выбирают нас' : 'Неліктен бізді таңдайды'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            {isRu
              ? 'Европейские стандарты стоматологии в Наурызбайском районе'
              : 'Наурызбай ауданындағы еуропалық сапа стандарты'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {isRu
              ? 'Создали атмосферу, где нет места боли, страху и спешке. Передовые технологии и бережное отношение к каждому пациенту.'
              : 'Ауырсыну мен қорқынышсыз жайлы орта жасадық. Заманауи технологиялар және әр науқасқа ерекше көңіл бөлу.'}
          </p>
        </div>

        {/* 6 Advantages Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, idx) => {
            const IconComponent = iconMap[adv.icon] || Sparkles;
            const isPromo = adv.icon === 'Percent';
            const is24h = adv.icon === 'Clock';

            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
                  isPromo
                    ? 'bg-gradient-to-br from-amber-500/10 via-amber-50 to-white border-amber-300'
                    : is24h
                    ? 'bg-gradient-to-br from-teal-900/5 via-teal-50/50 to-white border-teal-200'
                    : 'bg-slate-50/70 border-slate-200/90'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                      isPromo
                        ? 'bg-amber-500 text-white shadow-sm'
                        : is24h
                        ? 'bg-teal-700 text-white shadow-sm'
                        : 'bg-white text-teal-700 border border-slate-200 shadow-xs'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit']">
                    {isRu ? adv.titleRu : adv.titleKz}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isRu ? adv.descRu : adv.descKz}
                  </p>
                </div>

                {isPromo && (
                  <div className="mt-5 pt-4 border-t border-amber-200">
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-700"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>{isRu ? 'Активировать скидку' : 'Жеңілдікті алу'} →</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
