import React from 'react';
import { Language } from '../types';
import {
  CreditCard,
  QrCode,
  Banknote,
  ArrowLeftRight,
  BadgePercent,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

interface PaymentAndSterilityProps {
  lang: Language;
}

export const PaymentAndSterility: React.FC<PaymentAndSterilityProps> = ({
  lang
}) => {
  const isRu = lang === 'ru';

  const payments = [
    {
      title: isRu ? 'Kaspi QR & Halyk' : 'Kaspi QR және Halyk',
      desc: isRu ? 'Моментальная оплата по QR-коду через приложение' : 'Қосымша арқылы QR-кодпен лезде төлеу',
      icon: QrCode
    },
    {
      title: isRu ? 'Рассрочка и Kaspi Red' : 'Бөліп төлеу және Kaspi Red',
      desc: isRu ? 'Лечите зубы сейчас — платите удобными частями' : 'Тісіңізді қазір емдеп, бөліп төлеңіз',
      icon: BadgePercent
    },
    {
      title: isRu ? 'Банковские карты' : 'Банк карталары',
      desc: isRu ? 'Visa, Mastercard любого банка Казахстана' : 'Қазақстанның кез келген банк картасы',
      icon: CreditCard
    },
    {
      title: isRu ? 'Наличный расчёт' : 'Қолма-қол төлем',
      desc: isRu ? 'Оплата на стойке ресепшн с выдачей фискального чека' : 'Ресепшнде фискалды чекпен төлеу',
      icon: Banknote
    },
    {
      title: isRu ? 'Перевод с карты' : 'Картадан аудару',
      desc: isRu ? 'Быстрый перевод по номеру телефона/счёта' : 'Телефон немесе шот нөмірі арқылы аудару',
      icon: ArrowLeftRight
    }
  ];

  const sterilityFeatures = [
    {
      title: isRu ? 'Автоклав класса B' : 'В санатындағы автоклав',
      desc: isRu
        ? 'Трехступенчатая паровая стерилизация медицинских инструментов по международным протоколам.'
        : 'Халықаралық хаттамалар бойынша медициналық құралдарды үш сатылы бумен залалсыздандыру.'
    },
    {
      title: isRu ? 'Крафт-пакеты при вас' : 'Крафт-пакеттер сіздің көзіңізше',
      desc: isRu
        ? 'Стерильный индивидуальный набор распечатывается непосредственно перед началом приема.'
        : 'Стерильді жеке құралдар жиынтығы қабылдау алдында ғана сіздің алдыңызда ашылады.'
    },
    {
      title: isRu ? 'Безопасная анестезия' : 'Қауіпсіз анестезия',
      desc: isRu
        ? 'Премиальные гипоаллергенные анестетики (Артикаин) для 100% безболезненных манипуляций.'
        : 'Ауырсынуды толық жоятын қауіпсіз гипоаллергенді сапалы дәрілер қолданылады.'
    },
    {
      title: isRu ? 'Непрерывная дезинфекция' : 'Үздіксіз тазарту',
      desc: isRu
        ? 'Круглосуточная бактерицидная рециркуляция воздуха в каждом кабинете клиники.'
        : 'Клиниканың әр бөлмесінде ауаны үздіксіз тазартатын бактерицидтік құрылғылар жұмыс істейді.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Payments part */}
        <div className="mb-14">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
              {isRu ? 'Прозрачные расчеты' : 'Ыңғайлы есеп айырысу'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              {isRu ? 'Удобные способы оплаты' : 'Төлемнің барлық қолайлы түрлері'}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {isRu
                ? 'Принимаем все популярные платежные сервисы Казахстана. Доступна рассрочка и Kaspi Red.'
                : 'Қазақстандағы барлық танымал төлем түрлері қабылданады. Kaspi Red және бөліп төлеу қарастырылған.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {payments.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-teal-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sterility & Safety part */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {isRu ? '100% Стерильность и безопасность' : '100% Тазалық және қауіпсіздік'}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
                {isRu
                  ? 'Здоровье и комфорт наших пациентов — главный приоритет'
                  : 'Пациенттердің денсаулығы мен жайлылығы — біздің басты мақсатымыз'}
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 shrink-0">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>{isRu ? 'Строго по нормам Минздрава РК' : 'ҚР Денсаулық сақтау нормаларымен'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {sterilityFeatures.map((feat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{feat.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
