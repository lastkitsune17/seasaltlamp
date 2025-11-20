export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ProductFeature {
  title: string;
  description: string;
  iconName: 'Zap' | 'Shield' | 'Smartphone' | 'Globe' | 'Cpu' | 'Feather';
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}