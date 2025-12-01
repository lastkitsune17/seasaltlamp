
import { TeamMember, ProductFeature, ProductImage } from './types';
import { IMAGES } from './assets/images';

export const PRODUCT_NAME = "Salt Lamp";
export const PRODUCT_TAGLINE = "Inovasi Energi dari Air Garam";
export const PRODUCT_DESCRIPTION = "SALTLAMP adalah sebuah inovasi penerangan yang dikembangkan untuk mengatasi kelangkaan sumber cahaya yang stabil dan terjangkau di wilayah pesisir khususnya bagi nelayan, dengan memanfaatkan prinsip elektrolisis di mana air garam atau air laut bertindak sebagai larutan elektrolit alami. Sistem ini menggunakan sepasang elektroda logam seperti tembaga (Cu), yang bereaksi secara kimiawi dengan air garam untuk menyalakan lampu LED HPL berdaya rendah";

export const PRODUCT_IMAGES: ProductImage[] = [
  { id: '1', url: IMAGES.PRODUCT.GALLERY[0], alt: 'Salt Lamp Front View' },
  { id: '2', url: IMAGES.PRODUCT.GALLERY[1], alt: 'Salt Lamp Side Profile' },
  { id: '3', url: IMAGES.PRODUCT.GALLERY[2], alt: 'Salt Lamp Lifestyle Shot' },
  { id: '4', url: IMAGES.PRODUCT.GALLERY[3], alt: 'Salt Lamp Detail' },
  { id: '5', url: IMAGES.PRODUCT.GALLERY[4], alt: 'Salt Lamp In Action' },
];

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    title: "Energi Air Garam",
    description: "Hanya membutuhkan air garam atau air laut sebagai sumber energi listrik utama.",
    iconName: "Zap"
  },
  {
    title: "Reaksi Elektrokimia",
    description: "Bekerja dengan prinsip sel elektrolisis antara anoda dan katoda.",
    iconName: "Cpu"
  },
  {
    title: "LED Hemat Energi",
    description: "Penerangan maksimal dengan efisiensi tinggi untuk penggunaan jangka panjang.",
    iconName: "Feather"
  },
  {
    title: "Ramah Lingkungan",
    description: "Solusi penerangan alternatif yang aman dan berkelanjutan tanpa limbah berbahaya.",
    iconName: "Globe"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 't1',
    name: "Muhammad Farhan",
    role: "CEO",
    imageUrl: IMAGES.TEAM.FARHAN,
    bio: "Visionary leader driving the company towards new horizons and global impact with a focus on sustainable innovation.",
    socials: { instagram: "https://www.instagram.com/mfarhanalqssm?igsh=MXNtcWNpZW9vbnVlMQ==" }
  },
  {
    id: 't2',
    name: "Inganatus Sholehkhah",
    role: "Product Development",
    imageUrl: IMAGES.TEAM.INGANATUS,
    bio: "Leading the technical and design evolution of our product line, ensuring every detail meets our rigorous standards.",
    socials: { instagram: "https://www.instagram.com/inganatus_sholekhah?igsh=c2FkMjllNTc4M3lj" }
  },
  {
    id: 't3',
    name: "Anggun Valenscia",
    role: "Partnership",
    imageUrl: IMAGES.TEAM.ANGGUN,
    bio: "Building strategic alliances and cultivating relationships that expand our ecosystem and reach.",
    socials: { instagram: "https://www.instagram.com/anggunvlns?igsh=aTExYXFkYzZybTI5" }
  },
  {
    id: 't4',
    name: "Naura Atira Mardiah",
    role: "Finance and Legality",
    imageUrl: IMAGES.TEAM.NAURA,
    bio: "Ensuring operational excellence, financial integrity, and regulatory compliance across all global operations.",
    socials: { instagram: "https://www.instagram.com/ntrmrdh?igsh=eHIxcHJ0bG0xY2Z1" }
  },
  {
    id: 't5',
    name: "Muhammad Rizki Dwifani",
    role: "Brand, Marketing, and Design",
    imageUrl: IMAGES.TEAM.RIZKI,
    bio: "Crafting the narrative that connects our technology with the people who need it most, driving brand resonance.",
    socials: { instagram: "https://www.instagram.com/riz_artline?igsh=MXF6MTFteDJveWJrcg==" }
  }
];
