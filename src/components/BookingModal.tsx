import React, { useState, useEffect } from 'react';
import { SERVICES, DOCTORS, CLINIC_INFO } from '../data/clinicData';
import { Language, BookingFormData } from '../types';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  MessageCircle,
  Percent,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialServiceId?: string;
  initialDoctorId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialServiceId,
  initialDoctorId
}) => {
  const isRu = lang === 'ru';

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceId: initialServiceId || 'consultation',
    doctorId: initialDoctorId || 'any',
    date: new Date().toISOString().split('T')[0],
    time: '14:00',
    isFirstVisit: true,
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
    if (initialDoctorId) {
      setFormData((prev) => ({ ...prev, doctorId: initialDoctorId }));
    }
  }, [initialServiceId, initialDoctorId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare polite WhatsApp message
    const chosenService = SERVICES.find((s) => s.id === formData.serviceId);
    const serviceName = chosenService
      ? isRu ? chosenService.title : chosenService.titleKz
      : 'Консультация';

    const chosenDoctor = DOCTORS.find((d) => d.id === formData.doctorId);
    const doctorName = chosenDoctor
      ? isRu ? chosenDoctor.name : chosenDoctor.nameKz
      : isRu ? 'Любой свободный врач' : 'Кез келген бос дәрігер';

    const discountNote = formData.isFirstVisit
      ? isRu
        ? 'Впервые в клинике (Скидка 10% в честь открытия)'
        : 'Емханаға алғаш рет (10% ашылу жеңілдігі)'
      : '';

    const textMessage = `Здравствуйте! Запись на прием в AylinDent:
👤 Имя: ${formData.fullName || 'Пациент'}
📞 Телефон: ${formData.phone || 'Уточню в чате'}
🦷 Услуга: ${serviceName}
👨‍⚕️ Врач: ${doctorName}
📅 Дата: ${formData.date}
⏰ Время: ${formData.time}
${discountNote ? `${discountNote}\n` : ''}${formData.notes ? `💬 Примечание: ${formData.notes}` : ''}`;

    const encodedText = encodeURIComponent(textMessage);
    const targetUrl = `https://api.whatsapp.com/send/?phone=77477951709&text=${encodedText}&type=phone_number&app_absent=0`;

    // Open WhatsApp in new tab
    window.open(targetUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-800 to-emerald-700 text-white p-6 sm:p-7 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>{isRu ? 'Онлайн-запись 24/7' : '24/7 Онлайн жазылу'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit']">
            {isRu ? 'Запись на прием в AylinDent' : 'AylinDent қабылдауына жазылу'}
          </h3>
          <p className="text-xs sm:text-sm text-teal-100 mt-1">
            {isRu
              ? 'Заполните форму, и мы моментально свяжемся с вами в WhatsApp для подтверждения времени'
              : 'Мәліметтерді толтырыңыз, біз WhatsApp арқылы уақытты растау үшін лезде хабарласамыз'}
          </p>
        </div>

        {/* Modal Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-['Outfit']">
              {isRu ? 'Заявка сформирована!' : 'Өтінім дайындалды!'}
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {isRu
                ? 'Диалог с клиникой открылся в WhatsApp. Если окно не открылось автоматически, нажмите кнопку ниже:'
                : 'Клиникамен сұхбат WhatsApp-та ашылды. Егер ашылмаса, төмендегі батырманы басыңыз:'}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CLINIC_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{isRu ? 'Открыть WhatsApp' : 'WhatsApp-ты ашу'}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                {isRu ? 'Закрыть' : 'Жабу'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 text-left">
            {/* Promo 10% banner */}
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                <Percent className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">
                  {isRu ? 'Скидка 10% в честь открытия' : 'Ашылу құрметіне 10% жеңілдік'}
                </span>
                <span className="text-slate-600">
                  {isRu
                    ? 'Активируется автоматически для вашего первого визита'
                    : 'Алғашқы қабылдауыңызға автоматты түрде қосылады'}
                </span>
              </div>
            </div>

            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {isRu ? 'Ваше имя' : 'Атыңыз'} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder={isRu ? 'Например, Аида' : 'Мысалы, Аида'}
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {isRu ? 'Номер телефона' : 'Телефон нөмірі'} *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+7 (7XX) XXX-XX-XX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {isRu ? 'Интересующая услуга' : 'Қызмет түрі'}
              </label>
              <select
                value={formData.serviceId}
                onChange={(e) =>
                  setFormData({ ...formData, serviceId: e.target.value })
                }
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {isRu ? s.title : s.titleKz} ({s.priceEstimate})
                  </option>
                ))}
              </select>
            </div>

            {/* Doctor Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {isRu ? 'Выберите врача (по желанию)' : 'Дәрігерді таңдаңыз'}
              </label>
              <select
                value={formData.doctorId}
                onChange={(e) =>
                  setFormData({ ...formData, doctorId: e.target.value })
                }
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
              >
                <option value="any">
                  {isRu ? 'Любой свободный врач (быстрая запись)' : 'Кез келген бос дәрігер (жылдам)'}
                </option>
                {DOCTORS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {isRu ? d.name : d.nameKz} | {d.experience}
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {isRu ? 'Желаемая дата' : 'Қалайтын күніңіз'}
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {isRu ? 'Удобное время' : 'Қолайлы уақыт'}
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
                  >
                    <option value="10:00">10:00 (Утро)</option>
                    <option value="12:00">12:00 (День)</option>
                    <option value="14:00">14:00 (День)</option>
                    <option value="16:00">16:00 (День)</option>
                    <option value="18:00">18:00 (Вечер)</option>
                    <option value="20:00">20:00 (Вечер)</option>
                    <option value="22:00">22:00 (Ночное время 24/7)</option>
                    <option value="Ночь/Срочно">Экстренно (Острая боль 24/7)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Checkbox 1st visit */}
            <label className="flex items-center gap-2 text-xs text-slate-700 font-medium cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={formData.isFirstVisit}
                onChange={(e) =>
                  setFormData({ ...formData, isFirstVisit: e.target.checked })
                }
                className="w-4 h-4 text-teal-700 rounded border-slate-300 focus:ring-teal-700"
              />
              <span>
                {isRu
                  ? 'Я впервые обращаюсь в клинику AylinDent (применить скидку 10%)'
                  : 'AylinDent емханасына алғаш рет келемін (10% жеңілдік)'}
              </span>
            </label>

            {/* Symptoms notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {isRu ? 'Жалобы или пожелания (необязательно)' : 'Шағымдар мен қосымша ақпарат'}
              </label>
              <textarea
                rows={2}
                placeholder={
                  isRu
                    ? 'Опишите, что вас беспокоит (острая боль, зуб мудрости, консультация...)'
                    : 'Сізді не мазалайтынын жазыңыз...'
                }
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="modal-submit-whatsapp"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>
                  {isRu ? 'Отправить запись в WhatsApp' : 'WhatsApp арқылы жазылу'}
                </span>
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-400">
              {isRu
                ? 'Работаем круглосуточно. Администратор ответит в течение 2-5 минут.'
                : 'Тәулік бойы жұмыс істейміз. Әкімші 2-5 минутта жауап береді.'}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
