import React, { useState, useMemo } from 'react';
import { SERVICES } from '../data/clinicData';
import { Language, ServiceItem } from '../types';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Search,
  BadgePercent,
  CalendarCheck,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService
}) => {
  const isRu = lang === 'ru';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: isRu ? 'Все услуги' : 'Барлық қызметтер' },
    { id: 'diag', label: isRu ? 'Консультация и ОПТГ' : 'Кеңес және ОПТГ' },
    { id: 'therapy', label: isRu ? 'Терапия и микроскоп' : 'Терапия және микроскоп' },
    { id: 'surgery', label: isRu ? 'Хирургия и импланты' : 'Хирургия мен имплант' },
    { id: 'ortho', label: isRu ? 'Брекеты и прикус' : 'Брекеттер мен тістесу' },
    { id: 'kids', label: isRu ? 'Детская стоматология' : 'Балалар стоматологиясы' },
    { id: 'emergency', label: isRu ? 'Неотложка 24/7' : 'Тәулік бойғы 24/7' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' || service.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const title = (isRu ? service.title : service.titleKz).toLowerCase();
      const desc = (isRu ? service.description : service.descriptionKz).toLowerCase();
      return matchesCategory && (title.includes(q) || desc.includes(q));
    });
  }, [activeCategory, searchQuery, isRu]);

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {isRu ? 'Стоматологические услуги' : 'Стоматологиялық қызметтер'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            {isRu
              ? 'Полный спектр стоматологии для взрослых и детей'
              : 'Ересектер мен балаларға арналған толық көмек'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {isRu
              ? 'От бесплатной первичной консультации и панорамного рентгена (ОПТГ) до сложной имплантации и исправления прикуса. Скидка 10% в честь открытия клиники!'
              : 'Тегін кеңес беру мен ОПТГ панорамалық рентгеннен бастап күрделі имплантация мен брекеттерге дейін. Ашылу құрметіне 10% жеңілдік!'}
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8">
          {/* Categories Tab Group */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRu ? 'Найти услугу или процедуру...' : 'Қызметті іздеу...'}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-sm">
              {isRu ? 'Услуги по вашему запросу не найдены.' : 'Сұраныс бойынша қызмет табылмады.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-teal-700 hover:underline"
            >
              {isRu ? 'Сбросить фильтры' : 'Сүзгілерді тазарту'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service) => {
              const isFree = service.priceEstimate.includes('Бесплатно') || service.priceEstimate.includes('0 ₸');
              const isEmergency = service.category === 'emergency';

              return (
                <div
                  key={service.id}
                  className={`rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-md ${
                    isEmergency
                      ? 'bg-gradient-to-br from-red-50/50 to-amber-50/40 border-2 border-red-200'
                      : isFree
                      ? 'bg-gradient-to-br from-emerald-50/60 to-teal-50/40 border-2 border-emerald-300'
                      : 'bg-white border border-slate-200/90'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Badge and Category */}
                    <div className="flex items-center justify-between gap-2">
                      {service.highlight ? (
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isEmergency
                              ? 'bg-red-100 text-red-700'
                              : 'bg-teal-100 text-teal-800'
                          }`}
                        >
                          {service.highlight}
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          {isRu ? 'AylinDent' : 'AylinDent'}
                        </span>
                      )}

                      {service.duration && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {service.duration}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {isRu ? service.title : service.titleKz}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {isRu ? service.description : service.descriptionKz}
                    </p>
                  </div>

                  {/* Price & Action Footer */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-end justify-between gap-2">
                    <div>
                      <span className="text-[11px] text-slate-500 block">
                        {isRu ? 'Ориентировочная стоимость:' : 'Мөлшерлі бағасы:'}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-base sm:text-lg font-extrabold ${
                            isFree ? 'text-emerald-700' : 'text-slate-900'
                          }`}
                        >
                          {service.priceEstimate}
                        </span>
                        {service.discountPrice && !isFree && (
                          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                            {service.discountPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectService(service.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-teal-700 hover:bg-teal-800 text-white transition-colors shrink-0 shadow-xs"
                    >
                      <span>{isRu ? 'Записаться' : 'Жазылу'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Promo guarantee callout */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold tracking-wider uppercase">
              <BadgePercent className="w-4 h-4" />
              {isRu ? 'Скидка 10% в честь открытия' : 'Ашылу құрметіне 10% жеңілдік'}
            </div>
            <h3 className="text-xl font-bold font-['Outfit']">
              {isRu
                ? 'Нужна точная диагностика или сомневаетесь в диагнозе?'
                : 'Нақты диагноз қойып, емдеу жоспарын білгіңіз келе ме?'}
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              {isRu
                ? 'Приходите на бесплатный первичный осмотр к врачу. Мы проведем бережную оценку, сделаем снимок при необходимости и составим честную смету.'
                : 'Дәрігердің тегін кеңесіне келіңіз. Біз ауыз қуысын тексеріп, рентген жасап, нақты бағасын көрсетеміз.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectService('consultation')}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shrink-0 transition-colors shadow-md"
          >
            {isRu ? 'Записаться на бесплатный осмотр' : 'Тегін тексеруге жазылу'}
          </button>
        </div>
      </div>
    </section>
  );
};
