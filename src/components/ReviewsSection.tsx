import React, { useState, useMemo } from 'react';
import { REVIEWS, CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import {
  Star,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Heart,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';

interface ReviewsSectionProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const isRu = lang === 'ru';
  const [filterDoctor, setFilterDoctor] = useState<string>('all');
  const [filterLang, setFilterLang] = useState<string>('all');

  const filteredReviews = useMemo(() => {
    return REVIEWS.filter((rev) => {
      // Doctor filter
      let docMatch = true;
      if (filterDoctor === 'askar') {
        docMatch = rev.doctorName?.includes('Аскар') || rev.doctorName?.includes('Асқар') || false;
      } else if (filterDoctor === 'bekarys') {
        docMatch = rev.doctorName?.includes('Бекарыс') || false;
      } else if (filterDoctor === 'shyngys') {
        docMatch = rev.doctorName?.includes('Шынгыс') || rev.doctorName?.includes('Шыңғыс') || false;
      }

      // Lang filter
      let langMatch = true;
      if (filterLang === 'kz') {
        langMatch = rev.lang === 'kz';
      } else if (filterLang === 'ru') {
        langMatch = rev.lang === 'ru';
      }

      return docMatch && langMatch;
    });
  }, [filterDoctor, filterLang]);

  return (
    <section id="reviews" className="py-16 sm:py-22 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            {isRu ? '2GIS Отзывы пациентов' : 'Пациенттердің 2GIS пікірлері'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            {isRu
              ? 'Честные отзывы пациентов о клинике AylinDent'
              : 'AylinDent емханасы туралы шынайы пікірлер'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {isRu
              ? 'На основе 69 подтвержденных оценок в 2GIS. Средний балл 5.0 из 5.0. Наши пациенты доверяют нам свои улыбки.'
              : '2GIS жүйесіндегі 69 расталған бағалау негізінде. Орташа балл 5.0-ден 5.0. Біздің пациенттердің сенімі.'}
          </p>
        </div>

        {/* 2GIS Score Summary Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Big Rating Block */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-slate-900 font-['Outfit']">
                  5.0
                </span>
                <span className="text-slate-400 font-semibold text-lg">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-500">
                {isRu
                  ? '69 подтверждённых оценок в 2GIS'
                  : '2GIS-те 69 расталған бағалау'}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isRu ? 'Профиль клиники подтверждён' : 'Клиника профилі расталған'}
              </div>
            </div>

            {/* Middle Breakdown */}
            <div className="md:col-span-5 space-y-2">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 text-slate-600 font-medium">5 звёзд</span>
                <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[98%]"></div>
                </div>
                <span className="w-8 text-right font-bold text-slate-800">100%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 text-slate-400 font-medium">4 звезды</span>
                <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-200 rounded-full w-0"></div>
                </div>
                <span className="w-8 text-right font-medium text-slate-400">0%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 text-slate-400 font-medium">3 звезды</span>
                <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-200 rounded-full w-0"></div>
                </div>
                <span className="w-8 text-right font-medium text-slate-400">0%</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                {isRu
                  ? '100% пациентов поставили высшую оценку за комфорт, чистоту и безболезненность.'
                  : 'Барлық пациенттер емдеу сапасы мен жайлылық үшін ең жоғары 5 балл берген.'}
              </p>
            </div>

            {/* Right Action */}
            <div className="md:col-span-3 flex flex-col gap-2.5 text-center md:text-right">
              <a
                href={CLINIC_INFO.gisUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
              >
                <span>{isRu ? 'Открыть профиль в 2GIS' : '2GIS профилін ашу'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={CLINIC_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-700 hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {isRu ? 'Оставить свой отзыв' : 'Пікір қалдыру'}
              </a>
            </div>
          </div>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          {/* Doctor filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 mr-1">
              {isRu ? 'По врачу:' : 'Дәрігер бойынша:'}
            </span>
            <button
              type="button"
              onClick={() => setFilterDoctor('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterDoctor === 'all'
                  ? 'bg-teal-700 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {isRu ? 'Все' : 'Барлығы'}
            </button>
            <button
              type="button"
              onClick={() => setFilterDoctor('askar')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterDoctor === 'askar'
                  ? 'bg-teal-700 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {isRu ? 'Асқар Зупаров' : 'Асқар Зұпаров'}
            </button>
            <button
              type="button"
              onClick={() => setFilterDoctor('bekarys')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterDoctor === 'bekarys'
                  ? 'bg-teal-700 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {isRu ? 'Хирург Бекарыс' : 'Хирург Бекарыс'}
            </button>
            <button
              type="button"
              onClick={() => setFilterDoctor('shyngys')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filterDoctor === 'shyngys'
                  ? 'bg-teal-700 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {isRu ? 'Шынгысхан' : 'Шыңғысхан'}
            </button>
          </div>

          {/* Language filter */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-500 font-semibold mr-1">
              {isRu ? 'Язык:' : 'Тіл:'}
            </span>
            <button
              type="button"
              onClick={() => setFilterLang('all')}
              className={`px-2.5 py-1 rounded-md font-semibold ${
                filterLang === 'all'
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {isRu ? 'Все' : 'Барлығы'}
            </button>
            <button
              type="button"
              onClick={() => setFilterLang('kz')}
              className={`px-2.5 py-1 rounded-md font-semibold ${
                filterLang === 'kz'
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              Қазақша
            </button>
            <button
              type="button"
              onClick={() => setFilterLang('ru')}
              className={`px-2.5 py-1 rounded-md font-semibold ${
                filterLang === 'ru'
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              Русский
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-teal-300 transition-colors"
            >
              <div className="space-y-3.5">
                {/* Review Author & Visit count */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-200">
                      {rev.author.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-none">
                        {rev.author}
                      </p>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">
                        {rev.date}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                    {rev.visitsCount}{' '}
                    {rev.visitsCount === 1
                      ? isRu ? 'визит' : 'келу'
                      : isRu ? 'посещений' : 'рет келген'}
                  </span>
                </div>

                {/* Stars and verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="text-[10px] text-emerald-700 font-medium inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {isRu ? 'Отзыв подтверждён' : 'Расталған пікір'}
                  </span>
                </div>

                {/* Doctor tagged if any */}
                {rev.doctorName && (
                  <div className="text-[11px] text-slate-600 font-medium bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100 flex items-center gap-1">
                    <span className="text-slate-400">
                      {isRu ? 'Врач:' : 'Дәрігер:'}
                    </span>
                    <span className="font-semibold text-slate-800">
                      {rev.doctorName}
                    </span>
                  </div>
                )}

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {rev.textRu}
                </p>

                {/* Tags */}
                {rev.tags && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {rev.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Official reply if present */}
              {rev.officialReply && (
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] bg-teal-50/50 p-2.5 rounded-xl border border-teal-100/60">
                  <div className="flex items-center gap-1 text-teal-800 font-bold mb-1">
                    <Heart className="w-3 h-3 fill-teal-600 text-teal-600" />
                    <span>AylinDent (официальный ответ):</span>
                  </div>
                  <p className="text-slate-600 italic">{rev.officialReply}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
