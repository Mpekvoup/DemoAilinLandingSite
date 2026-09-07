import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Instagram,
  Star,
  ShieldCheck,
  Percent,
  CreditCard,
  QrCode
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking }) => {
  const isRu = lang === 'ru';

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Mission column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-md">
                A
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">
                  Aylin<span className="text-teal-400">Dent</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 ml-2 rounded bg-teal-900/60 text-teal-300 border border-teal-700/50">
                  Almaty
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {isRu
                ? 'Круглосуточная частная стоматология в Наурызбайском районе Алматы. Бережное лечение зубов взрослым и детям, атравматичная хирургия, имплантация, ортодонтия, микроскоп и цифровая диагностика ОПТГ.'
                : 'Алматының Наурызбай ауданындағы тәулік бойғы стоматологиялық емхана. Ересектер мен балаларға ауыртпай емдеу, хирургия, имплантация, брекеттер және ОПТГ рентген.'}
            </p>

            {/* 2GIS Rating Pill */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CLINIC_INFO.gisUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold transition-colors border border-slate-700"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-white font-bold">5.0</span>
                <span className="text-slate-400 text-[11px]">
                  (69 {isRu ? 'отзывов в 2GIS' : '2GIS пікірі'})
                </span>
              </a>

              <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                24/7
              </span>
            </div>
          </div>

          {/* Services Links column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              {isRu ? 'Услуги клиники' : 'Емхана қызметтері'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  {isRu ? 'Бесплатная консультация врача' : 'Дәрігердің тегін кеңесі'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  {isRu ? 'Неотложка 24/7 при острой боли' : 'Өткір ауру кезіндегі 24/7 көмек'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  {isRu ? 'Лечение под микроскопом' : 'Микроскоппен емдеу'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  {isRu ? 'Удаление зубов мудрости без боли' : 'Ақыл тістерін жеңіл жұлу'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  {isRu ? 'Дентальная имплантация' : 'Тіс имплантациясы'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  {isRu ? 'Брекеты и элайнеры' : 'Брекеттер мен элайнерлер'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  {isRu ? 'Детский стоматолог без слез' : 'Балалар стоматологиясы'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  {isRu ? 'ОПТГ и прицельные снимки' : 'ОПТГ және сандық рентген'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts and navigation column */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              {isRu ? 'Контакты и график' : 'Байланыс және мекенжай'}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">
                    {isRu ? CLINIC_INFO.addressRu : CLINIC_INFO.addressKz}
                  </span>
                  <span className="block text-slate-400 text-[11px] mt-0.5">
                    {isRu ? CLINIC_INFO.busStopRu : CLINIC_INFO.busStopKz} • 9 парковочных мест
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong className="text-white">
                    {isRu ? 'Режим:' : 'Жұмыс кестесі:'}
                  </strong>{' '}
                  {isRu ? CLINIC_INFO.workHoursRu : CLINIC_INFO.workHoursKz}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                <a
                  href={`tel:${CLINIC_INFO.phone2Clean}`}
                  className="flex items-center gap-2 text-white font-bold hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>{CLINIC_INFO.phone2}</span>
                </a>
                <a
                  href={`tel:${CLINIC_INFO.phone1Clean}`}
                  className="flex items-center gap-2 text-slate-300 font-medium hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>{CLINIC_INFO.phone1}</span>
                </a>
              </div>
            </div>

            {/* Social & Messenger CTAs */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={CLINIC_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram {CLINIC_INFO.instagramHandle}</span>
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors"
              >
                <Percent className="w-3.5 h-3.5" />
                <span>{isRu ? 'Скидка 10%' : '10% жеңілдік'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright and payment methods */}
        <div className="pt-8 space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="text-center sm:text-left">
              <div>© {new Date().getFullYear()} AylinDent. {isRu ? 'Все права защищены.' : 'Барлық құқықтар қорғалған.'}</div>
              <div className="text-[11px] text-slate-600 mt-1">
                {isRu ? 'Работаем с 2023 года' : '2023 жылдан бастап жұмыс істейміз'} • ИП "{isRu ? 'Стоматологическая клиника AylinDent' : 'AylinDent стоматология емханасы'}"
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
              <span>Kaspi QR</span>
              <span>•</span>
              <span>Kaspi Red</span>
              <span>•</span>
              <span>Visa / Mastercard</span>
              <span>•</span>
              <span>{isRu ? 'Наличный расчёт' : 'Қолма-қол'}</span>
            </div>
          </div>

          <div className="text-[10px] text-slate-600 text-center pt-2 border-t border-slate-800/50">
            {isRu
              ? 'Имеются противопоказания. Необходима консультация специалиста.'
              : 'Қарсы көрсетілімдері бар. Маманмен кеңесу қажет.'}
          </div>
        </div>
      </div>
    </footer>
  );
};
