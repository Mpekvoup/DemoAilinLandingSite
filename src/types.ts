export type Language = 'ru' | 'kz';

export interface Doctor {
  id: string;
  name: string;
  nameKz: string;
  role: string;
  roleKz: string;
  experience: string;
  specialties: string[];
  specialtiesKz: string[];
  description: string;
  descriptionKz: string;
  patientQuote: string;
  rating: number;
  reviewCount: number;
  avatarColor: string;
  initials: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleKz: string;
  category: 'therapy' | 'surgery' | 'ortho' | 'kids' | 'diag' | 'emergency';
  description: string;
  descriptionKz: string;
  priceEstimate: string;
  discountPrice?: string;
  duration?: string;
  popular?: boolean;
  highlight?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  visitsCount: number;
  doctorName?: string;
  textRu: string;
  textKz?: string;
  officialReply?: string;
  tags?: string[];
  lang: 'ru' | 'kz';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  doctorId: string;
  date: string;
  time: string;
  isFirstVisit: boolean;
  notes: string;
}
