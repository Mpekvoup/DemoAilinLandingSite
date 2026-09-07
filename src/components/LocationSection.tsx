import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import {
  MapPin,
  Clock,
  Car,
  Bus,
  Phone,
  MessageCircle,
  Instagram,
  Copy,
  Check,
  Navigation,
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const isRu = lang === 'ru';
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('г. Алматы, Наурызбайский район, мкр. Шугыла, 340/46 к5, стоматология AylinDent');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-14 sm:py-19 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            {isRu ? 'Контакты и проезд' : 'Байланыс және бағыт'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            {isRu
              ? 'Как нас найти в Наурызбайском районе Алматы'
              : 'Алматы қаласында бізді қалай табуға болады'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {isRu
              ? 'мкр. Шугыла, 340/46 к5. 1 минута от остановки «Грушевая», 9 парковочных мест прямо перед клиникой. Работаем круглосуточно 24/7.'
              : 'Шұғыла ш/а, 340/46 к5. «Грушевая» аялдамасынан 1 минут, клиника алдында 9 көлік тұрағы. Тәулік бойы 24/7 ашықпыз.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Note about 2GIS Navigation */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">
                  {isRu ? 'Рекомендуем навигатор 2GIS или Яндекс Карты:' : '2GIS немесе Яндекс Карталарды қолдануға кеңес береміз:'}
                </span>
                <p className="mt-0.5 text-amber-800 leading-relaxed">
                  {isRu
                    ? 'В Google Maps клиника сейчас находится на этапе добавления. Точный маршрут с номерами подъездов и парковкой доступен в 2GIS.'
                    : 'Google Maps-те емхана қосылу кезеңінде. Нақты бағыт, кіреберіс және тұрақ 2GIS картасында толық көрсетілген.'}
                </p>
              </div>
            </div>

            {/* Main Info Box */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 space-y-6">
              {/* Address with copy button */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  {isRu ? 'Точный адрес:' : 'Нақты мекенжайы:'}
                </span>
                <p className="text-base font-bold text-slate-900">
                  {isRu ? CLINIC_INFO.addressRu : CLINIC_INFO.addressKz}
                </p>
                <div className="pt-1 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">
                          {isRu ? 'Скопировано!' : 'Көшірілді!'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>{isRu ? 'Скопировать адрес' : 'Мекенжайды көшіру'}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={CLINIC_INFO.gisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>2GIS</span>
                  </a>
                </div>
              </div>

              {/* Transit and Parking */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200/70">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-teal-700 text-xs font-bold">
                    <Bus className="w-4 h-4" />
                    <span>{isRu ? 'Остановка «Грушевая»' : '«Грушевая» аялдамасы'}</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {isRu ? '1 мин пешком (150 метров)' : '1 мин жаяу (150 метр)'}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-teal-700 text-xs font-bold">
                    <Car className="w-4 h-4" />
                    <span>{isRu ? '9 парковочных мест' : '9 көлік тұрағы'}</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {isRu ? 'Прямо перед входом' : 'Кіреберіс алдында'}
                  </p>
                </div>
              </div>

              {/* Working hours */}
              <div className="space-y-1 pt-2 border-t border-slate-200/70">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  {isRu ? 'Режим работы:' : 'Жұмыс кестесі:'}
                </span>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>{isRu ? CLINIC_INFO.workHoursRu : CLINIC_INFO.workHoursKz}</span>
                </div>
                <p className="text-xs text-slate-500">
                  {isRu
                    ? 'Прием пациентов, консультации и неотложная помощь круглосуточно'
                    : 'Науқастарды қабылдау, кеңес және шұғыл көмек 24 сағат'}
                </p>
              </div>

              {/* Phones & messengers */}
              <div className="space-y-3 pt-2 border-t border-slate-200/70">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  {isRu ? 'Телефоны и мессенджеры:' : 'Телефондар мен мессенджерлер:'}
                </span>
                <div className="space-y-2">
                  <a
                    href={`tel:${CLINIC_INFO.phone2Clean}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/80 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-teal-700" />
                      <span className="text-sm font-bold text-slate-900">
                        {CLINIC_INFO.phone2}
                      </span>
                    </div>
                    <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      24/7
                    </span>
                  </a>

                  <a
                    href={`tel:${CLINIC_INFO.phone1Clean}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/80 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-teal-700" />
                      <span className="text-sm font-bold text-slate-900">
                        {CLINIC_INFO.phone1}
                      </span>
                    </div>
                  </a>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={CLINIC_INFO.whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={CLINIC_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-xs transition-colors shadow-xs"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>{CLINIC_INFO.instagramHandle}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Visual Map & Route Visualizer */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-slate-900 text-white p-6 sm:p-8 overflow-hidden relative shadow-xl">
              {/* Top map head */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                      {isRu ? 'Навигационная карта' : 'Навигациялық карта'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1 font-['Outfit']">
                    {isRu
                      ? 'Схема подъезда и парковки AylinDent'
                      : 'AylinDent келу және тұрақ сызбасы'}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={CLINIC_INFO.gisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
                  >
                    <span>{isRu ? 'Открыть в 2GIS' : '2GIS-те ашу'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={CLINIC_INFO.yandexMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                  >
                    <span>{isRu ? 'Яндекс Карты' : 'Яндекс Карты'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Graphic Scheme Container */}
              <div className="my-6 rounded-2xl bg-slate-950/80 p-5 sm:p-7 border border-slate-800 space-y-6">
                {/* Visual Landmark Diagram */}
                <div className="relative border border-slate-800/80 rounded-xl p-4 bg-slate-900/60">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    {/* Landmark 1 */}
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 flex flex-col items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2">
                        <Bus className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-white">
                        {isRu ? 'Ост. «Грушевая»' : '«Грушевая» аялдамасы'}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-0.5">
                        {isRu ? '150 м (1 мин пешком)' : '150 м (1 мин жаяу)'}
                      </span>
                    </div>

                    {/* Path arrow */}
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 flex flex-col items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                        <Car className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-white">
                        {isRu ? 'Парковка 9 мест' : '9 көлік тұрағы'}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-0.5">
                        {isRu ? 'Прямо перед входом' : 'Кіреберіс алдында'}
                      </span>
                    </div>

                    {/* Landmark AylinDent */}
                    <div className="p-3 rounded-xl bg-teal-950 border border-teal-500/40 flex flex-col items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center mb-2 shadow-md shadow-teal-500/20">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-teal-300">
                        AylinDent (340/46 к5)
                      </span>
                      <span className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                        {isRu ? 'Круглосуточно 24/7' : 'Тәулік бойы 24/7'}
                      </span>
                    </div>
                  </div>

                  {/* Route instruction badge */}
                  <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-teal-400 font-medium">
                      <Navigation className="w-3.5 h-3.5" />
                      {isRu
                        ? 'Ориентир: Наурызбайский район, мкр. Шугыла, корпус 5'
                        : 'Бағдар: Наурызбай ауданы, Шұғыла ш/а, 5 корпус'}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      {isRu ? 'Координаты в 2GIS' : '2GIS координаттары'}
                    </span>
                  </div>
                </div>

                {/* Driving & Transit Step Guide */}
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-900 text-teal-300 font-bold flex items-center justify-center shrink-0 text-xs">
                      1
                    </span>
                    <p>
                      <strong className="text-white">
                        {isRu ? 'На общественном транспорте:' : 'Қоғамдық көлікпен:'}
                      </strong>{' '}
                      {isRu
                        ? 'Доезжайте до остановки «Грушевая». Перейдите дорогу по пешеходному переходу, и через 150 метров вы увидите вывеску AylinDent.'
                        : '«Грушевая» аялдамасына дейін келіп, жаяу жүргінші жолымен 150 метр өтсеңіз, AylinDent маңдайшасын көресіз.'}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-900 text-teal-300 font-bold flex items-center justify-center shrink-0 text-xs">
                      2
                    </span>
                    <p>
                      <strong className="text-white">
                        {isRu ? 'На автомобиле или такси:' : 'Автокөлікпен немесе таксимен:'}
                      </strong>{' '}
                      {isRu
                        ? 'Укажите в 2GIS точку «AylinDent» или адрес «мкр. Шугыла, 340/46 корпус 5». Возле клиники оборудовано 9 удобных парковочных мест.'
                        : '2GIS картасына «AylinDent» немесе «Шұғыла ш/а, 340/46 5 корпус» деп жазыңыз. Емхана жанында 9 тегін тұрақ бар.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Call */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-slate-400">
                  {isRu
                    ? 'Заблудились или нужна помощь в навигации? Позвоните нам:'
                    : 'Жол таппай қиналсаңыз, бізге бірден қоңырау шалыңыз:'}
                </span>
                <a
                  href={`tel:${CLINIC_INFO.phone2Clean}`}
                  className="font-bold text-white hover:text-teal-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>{CLINIC_INFO.phone2}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
