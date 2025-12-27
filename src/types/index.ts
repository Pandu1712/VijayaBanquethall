export interface ServiceType {
  id: string;
  title: string;
  description: string;
  shortDesc: string;
  capacity?: string;
  features: string[];
  images: string[];
}

export interface EventType {
  name: string;
  description: string;
}

export type PageType = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'service-detail';
