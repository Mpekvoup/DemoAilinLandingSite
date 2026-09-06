import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import {
  Phone,
  Clock,
  MapPin,
  MessageCircle,
  Menu,
  X,
  Star,
  Percent,
  CalendarCheck
} from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: (serviceId?: string, doctorId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    roundTheClock: lang === 'ru' ? 'Круглосуточно 24/7' : 'Тәулік бойы 24/7',
    promoBadge: lang === 'ru' ? 'Скидка 10% в честь открытия' : 'Ашылу құрметіне 10% жеңілдік',
    services: lang === 'ru' ? 'Услуги и цены' : 'Қызметтер мен бағалар',
    doctors: lang === 'ru' ? 'Врачи' : 'Дәрігерлер',
    reviews: lang === 'ru' ? 'Отзывы 2GIS (5.0)' : '2GIS Пікірлері (5.0)',
    location: lang === 'ru' ? 'Контакты и проезд' : 'Байланыс және мекенжай',
    bookBtn: lang === 'ru' ? 'Записаться онлайн' : 'Қабылдауға жазылу',
    freeConsultation: lang === 'ru' ? 'Консультация 0 ₸' : 'Кеңес 0 ₸',
    shugyla: lang === 'ru' ? 'мкр. Шугыла, 340/46 к5' : 'Шұғыла ш/а, 340/46 к5'
  };

  const navLinks = [
    { href: '#services', label: t.services },
    { href: '#doctors', label: t.doctors },
    { href: '#reviews', label: t.reviews },
    { href: '#location', label: t.location }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top micro bar for 24/7 emergency & promo */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t.roundTheClock}
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-amber-300 font-medium">
              <Percent className="w-3 h-3" />
              {t.promoBadge}
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-teal-300">
              <MapPin className="w-3 h-3 text-teal-400" />
              {t.shugyla}
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            {/* 2GIS rating badge */}
            <a
              href="#reviews"
              className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/15 px-2 py-0.5 rounded text-amber-300 transition-colors"
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-white">5.0</span>
              <span className="text-slate-300 text-[11px]">(69 2GIS)</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800 rounded-md p-0.5 border border-slate-700">
              <button
                type="button"
                id="btn-lang-ru"
                onClick={() => onLanguageChange('ru')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                  lang === 'ru'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                RU
              </button>
              <button
                type="button"
                id="btn-lang-kz"
                onClick={() => onLanguageChange('kz')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                  lang === 'kz'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                KZ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.5 2 6 4 5 7c-1 3-1 6.5 0 9.5 1 2.8 2.2 4.5 3.5 5.5 1.5 1 3.5-1.5 3.5-3.5 0 2 2 4.5 3.5 3.5 1.3-1 2.5-2.7 3.5-5.5 1-3 1-6.5 0-9.5-1-3-3.5-5-7-5zm0 3c2.5 0 4 1.5 4.5 3.5.5 2 0 4.5-.5 7-.5 2.5-1 3.5-2 3.5-1.2 0-1.5-2.5-2-4-.5 1.5-.8 4-2 4-1 0-1.5-1-2-3.5-.5-2.5-1-5-.5-7C9 6.5 10.5 5 12 5z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 font-['Outfit']">
                Aylin<span className="text-teal-700">Dent</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                Almaty
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              {lang === 'ru'
                ? 'Круглосуточная стоматология 24/7'
                : 'Тәулік бойғы стоматология 24/7'}
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-teal-700 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Contacts & Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Phone call dropdown or quick links */}
          <div className="text-right hidden md:block">
            <a
              href={`tel:${CLINIC_INFO.phone2Clean}`}
              className="text-sm font-bold text-slate-900 hover:text-teal-700 block transition-colors leading-tight"
            >
              {CLINIC_INFO.phone2}
            </a>
            <span className="text-[11px] text-slate-500 flex items-center justify-end gap-1">
              <Clock className="w-3 h-3 text-emerald-600" />
              {lang === 'ru' ? '24/7 Без выходных' : '24/7 Демалыссыз'}
            </span>
          </div>

          {/* WhatsApp Direct */}
          <a
            id="header-whatsapp-btn"
            href={CLINIC_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/80 transition-all flex items-center justify-center shadow-xs"
            title="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
          </a>

          {/* Book Appointment CTA */}
          <button
            type="button"
            id="header-book-btn"
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>{t.bookBtn}</span>
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Меню"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-2 pt-1">
            <a
              href={`tel:${CLINIC_INFO.phone2Clean}`}
              className="flex items-center gap-2.5 text-sm font-semibold text-slate-900 px-3 py-2 rounded-lg bg-slate-50"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>{CLINIC_INFO.phone2}</span>
              <span className="ml-auto text-xs text-emerald-600 font-medium">24/7</span>
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone1Clean}`}
              className="flex items-center gap-2.5 text-sm font-medium text-slate-700 px-3 py-2 rounded-lg bg-slate-50"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>{CLINIC_INFO.phone1}</span>
            </a>
          </div>

          <div className="flex gap-2 pt-2">
            <a
              href={CLINIC_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2.5 px-4 rounded-xl text-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              {t.bookBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
