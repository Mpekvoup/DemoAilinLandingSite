import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Language } from '../types';
import {
  Star,
  CheckCircle2,
  CalendarCheck,
  Award,
  Sparkles,
  Quote,
  ShieldCheck
} from 'lucide-react';

interface DoctorsSectionProps {
  lang: Language;
  onSelectDoctor: (doctorId: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  lang,
  onSelectDoctor
}) => {
  const isRu = lang === 'ru';

  return (
    <section id="doctors" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            {isRu ? 'Наши специалисты' : 'Біздің мамандар'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            {isRu
              ? 'Врачи, которым доверяют годами и советуют близким'
              : 'Жылдар бойы сенім артып, жақындарына ұсынатын дәрігерлер'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {isRu
              ? 'Внимательные, аккуратные доктора с легкой рукой. Объясняют каждый шаг простыми словами, проводят лечение бережно и безболезненно.'
              : 'Ұқыпты, қолы жеңіл білікті мамандар. Барлығын қарапайым тілмен түсіндіріп, ауыртпай емдейді.'}
          </p>
        </div>

        {/* Doctors 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-slate-50/60 border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group"
            >
              <div className="space-y-5">
                {/* Header with Avatar & Rating */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${doc.avatarColor} text-white font-extrabold text-xl flex items-center justify-center shadow-md`}
                  >
                    {doc.initials}
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{doc.rating}</span>
                      <span className="text-slate-400 font-normal">/ 5.0</span>
                    </div>
                    <span className="block text-[11px] text-slate-500 mt-1">
                      {doc.reviewCount} {isRu ? 'отзывов в 2GIS' : '2GIS пікірі'}
                    </span>
                  </div>
                </div>

                {/* Name & Specialty */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                    {isRu ? doc.name : doc.nameKz}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mt-1">
                    {isRu ? doc.role : doc.roleKz}
                  </p>
                  <span className="inline-block text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/70 mt-2">
                    {doc.experience}
                  </span>
                </div>

                {/* Key specialties pills */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {isRu ? 'Специализация:' : 'Мамандануы:'}
                  </span>
                  <div className="space-y-1">
                    {(isRu ? doc.specialties : doc.specialtiesKz).map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                  {isRu ? doc.description : doc.descriptionKz}
                </p>

                {/* Real Patient Quote */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-700 italic space-y-1 relative">
                  <Quote className="w-4 h-4 text-teal-400 inline mr-1 opacity-70" />
                  <span>{doc.patientQuote}</span>
                </div>
              </div>

              {/* Book Appointment with this doctor */}
              <div className="pt-6 mt-6 border-t border-slate-200/60">
                <button
                  type="button"
                  onClick={() => onSelectDoctor(doc.id)}
                  className="w-full py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>
                    {isRu
                      ? `Записаться к ${doc.name.split(' ')[0]}`
                      : `${doc.nameKz.split(' ')[0]} қабылдауына жазылу`}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
