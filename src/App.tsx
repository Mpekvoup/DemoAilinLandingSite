import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromoAndAdvantages } from './components/PromoAndAdvantages';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { PaymentAndSterility } from './components/PaymentAndSterility';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingEmergency } from './components/FloatingEmergency';

export default function App() {
  const [lang, setLang] = useState<Language>('ru');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>();

  const handleOpenBooking = (serviceId?: string, doctorId?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedDoctorId(doctorId);
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    handleOpenBooking(serviceId, undefined);
  };

  const handleSelectDoctor = (doctorId: string) => {
    handleOpenBooking(undefined, doctorId);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Navigation Header */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Promo & 6 Key Advantages */}
        <PromoAndAdvantages
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Services & Transparent Prices with 10% Discount */}
        <ServicesSection
          lang={lang}
          onSelectService={handleSelectService}
        />

        {/* Doctors Showcase (Askar, Bekarys, Shyngys) */}
        <DoctorsSection
          lang={lang}
          onSelectDoctor={handleSelectDoctor}
        />

        {/* Authentic 2GIS Reviews with 5.0 Rating */}
        <ReviewsSection
          lang={lang}
        />

        {/* Payment options & Safety / Sterility */}
        <PaymentAndSterility
          lang={lang}
        />

        {/* Clinic Location, 2GIS Guide & 9 Parking spots */}
        <LocationSection
          lang={lang}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        lang={lang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking & WhatsApp Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        initialServiceId={selectedServiceId}
        initialDoctorId={selectedDoctorId}
      />

      {/* Floating 24/7 Emergency Assistant */}
      <FloatingEmergency
        lang={lang}
        onOpenBooking={() => handleOpenBooking('emergency-night')}
      />
    </div>
  );
}
