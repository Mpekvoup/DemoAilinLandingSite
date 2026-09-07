import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import {
  Star,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Clock,
  MapPin,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Percent
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const isRu = lang === 'ru';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50/50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Decorative subtle medical pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top badges bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* 2GIS Rating Badge */}
              <a
                href="#reviews"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold shadow-xs hover:bg-amber-100/70 transition-colors"
              >
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold">5.0</span>
                <span className="text-amber-700 font-normal">
                  (69 {isRu ? 'отзывов в 2GIS' : '2GIS пікірі'})
                </span>
              </a>

              {/* 24/7 Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {isRu ? 'Круглосуточно 24/7' : 'Тәулік бойы 24/7'}
              </span>

              {/* Free Consultation */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                {isRu ? 'Бесплатная консультация' : 'Тегін алғашқы кеңес'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-['Outfit']">
              {isRu ? (
                <>
                  Стоматология <span className="text-teal-700">AylinDent</span> в Алматы: лечение без боли и страха
                </>
              ) : (
                <>
                  Алматыдағы <span className="text-teal-700">AylinDent</span> стоматологиясы: ауыртпай емдеу
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {isRu ? (
                <>
                  Современная взрослая и детская стоматология в Наурызбайском районе.
                  Лечение под микроскопом, удаление сложных зубов мудрости, имплантация,
                  ортодонтия и панорамный рентген (ОПТГ).
                </>
              ) : (
                <>
                  Наурызбай ауданындағы заманауи ересектер мен балалар стоматологиясы.
                  Микроскоппен емдеу, ақыл тістерін жеңіл жұлу, имплантация, брекеттер және
                  панорамалық рентген (ОПТГ).
                </>
              )}
            </p>

            {/* Big Promo Highlight Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-teal-500/10 border border-amber-300/60 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Percent className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-white">
                    {isRu ? 'Акция' : 'Арнайы акция'}
                  </span>
                  <span className="text-xs text-amber-800 font-semibold">
                    {isRu ? 'В честь открытия' : 'Ашылу құрметіне'}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {isRu
                    ? 'Скидка 10% на первое посещение клиники!'
                    : 'Алғашқы қабылдауға 10% жеңілдік!'}
                </h2>
                <p className="text-xs text-slate-600">
                  {isRu
                    ? 'Действует на терапию, хирургию, чистку и консультацию при записи онлайн или через WhatsApp'
                    : 'Онлайн немесе WhatsApp арқылы жазылғанда барлық емдеуге жарамды'}
                </p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                id="hero-book-online-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 bg-teal-700 hover:bg-teal-800 text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-md shadow-teal-700/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>{isRu ? 'Записаться со скидкой 10%' : '10% жеңілдікпен жазылу'}</span>
              </button>

              <a
                id="hero-whatsapp-btn"
                href={CLINIC_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold px-5 py-3.5 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone2Clean}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 text-base font-semibold px-4 py-3.5 rounded-xl border border-slate-300 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-teal-700" />
                <span>{CLINIC_INFO.phone2}</span>
              </a>
            </div>

            {/* Micro Location and Trust Note */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                {isRu ? CLINIC_INFO.addressRu : CLINIC_INFO.addressKz}
              </span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                {isRu ? CLINIC_INFO.busStopRu : CLINIC_INFO.busStopKz}
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                {isRu ? '9 бесплатных парковочных мест' : '9 тегін көлік тұрағы'}
              </span>
            </div>
          </div>

          {/* Right Card / Interactive Overview Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl shadow-slate-200/50 border border-slate-200/90 space-y-6">
              {/* Doctor snippet preview */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block">
                    {isRu ? 'Опытные врачи' : 'Білікті дәрігерлер'}
                  </span>
                  <h2 className="text-base font-bold text-slate-900">
                    {isRu ? 'Команда специалистов AylinDent' : 'AylinDent мамандар тобы'}
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                  24/7 В сети
                </span>
              </div>

              {/* 3 Top Doctors Avatars & Quick quote */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                    АЗ
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900 truncate">
                      {isRu ? 'Зупаров Асқар Сыдыкович' : 'Зұпаров Асқар Сыдықұлы'}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {isRu ? 'Терапевт, ортопед, хирург (9+ лет)' : 'Терапевт, ортопед, хирург (9+ жыл)'}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                    ★ 5.0
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                    БД
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900 truncate">
                      {isRu ? 'Доктор Бекарыс' : 'Бекарыс Дәрігер'}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {isRu ? 'Хирург-имплантолог, зубы мудрости' : 'Хирург-имплантолог, ақыл тістері'}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                    ★ 5.0
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-cyan-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                    ША
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900 truncate">
                      {isRu ? 'Шынгысхан Аскарулы' : 'Шыңғысхан Асқарұлы'}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {isRu ? 'Терапевт («Легкая рука», кариес)' : 'Терапевт («Қолы жеңіл», кариес)'}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                    ★ 5.0
                  </span>
                </div>
              </div>

              {/* Patient quote pill */}
              <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-xs text-teal-900 italic">
                {isRu
                  ? '«Тісім қатты ауырып жылап барғанымда Бекарыс доктор емдеп алды, рахмет көп-көп, қолдарыңыз дерт көрмесін!» - Aiymlms (2GIS)'
                  : '«Тісім қатты ауырып жылап барғанымда Бекарыс доктор емдеп алды, рахмет көп-көп, қолдарыңыз дерт көрмесін!» - Aiymlms (2GIS)'}
              </div>

              {/* Clinic Fast Facts Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-1 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-lg font-extrabold text-teal-700">24 / 7</span>
                  <span className="text-[11px] text-slate-500">
                    {isRu ? 'Круглосуточно' : 'Тәулік бойы'}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-lg font-extrabold text-amber-600">-10%</span>
                  <span className="text-[11px] text-slate-500">
                    {isRu ? 'На 1-й визит' : '1-ші қабылдауда'}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-lg font-extrabold text-slate-800">150 м</span>
                  <span className="text-[11px] text-slate-500">
                    {isRu ? 'Ост. «Грушевая»' : '«Грушевая» аялдамасы'}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-lg font-extrabold text-emerald-700">Kaspi</span>
                  <span className="text-[11px] text-slate-500">
                    {isRu ? 'QR / Red / Рассрочка' : 'QR / Red / Бөліп төлеу'}
                  </span>
                </div>
              </div>

              {/* Fast book trigger inside card */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>{isRu ? 'Записаться на прием' : 'Қабылдауға жазылу'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
