
import { TeamMember, ProductFeature, ProductImage } from './types';
import { IMAGES } from './assets/images';

export const PRODUCT_NAME = "Lumina X1";
export const PRODUCT_TAGLINE = "Redefining the boundaries of minimal aesthetics.";

export const PRODUCT_IMAGES: ProductImage[] = [
  { id: '1', url: IMAGES.PRODUCT.GALLERY[0], alt: 'Lumina Front View' },
  { id: '2', url: IMAGES.PRODUCT.GALLERY[1], alt: 'Lumina Side Profile' },
  { id: '3', url: IMAGES.PRODUCT.GALLERY[2], alt: 'Lumina Lifestyle Shot' },
  { id: '4', url: IMAGES.PRODUCT.GALLERY[3], alt: 'Lumina Detail' },
  { id: '5', url: IMAGES.PRODUCT.GALLERY[4], alt: 'Lumina In Action' },
  { id: '6', url: IMAGES.PRODUCT.GALLERY[5], alt: 'Lumina Abstract' },
];

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    title: "Lightning Fast",
    description: "Powered by the next-gen chipset, ensuring zero latency in your daily workflow.",
    iconName: "Zap"
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade encryption built into the hardware core for ultimate privacy.",
    iconName: "Shield"
  },
  {
    title: "Featherlight Build",
    description: "Aerospace-grade aluminum alloy makes it stronger yet 30% lighter.",
    iconName: "Feather"
  },
  {
    title: "Global Connectivity",
    description: "Seamless 5G and satellite support keeps you connected anywhere on Earth.",
    iconName: "Globe"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 't1',
    name: "Muhammad Farhan",
    role: "CEO",
    imageUrl: IMAGES.TEAM.MARCUS,
    bio: "Visionary leader driving the company towards new horizons and global impact with a focus on sustainable innovation.",
    socials: { instagram: "https://www.instagram.com/mfarhanalqssm?igsh=MXNtcWNpZW9vbnVlMQ==" }
  },
  {
    id: 't2',
    name: "Inganatus Sholehkhah",
    role: "Product Development",
    imageUrl: IMAGES.TEAM.ELENA,
    bio: "Leading the technical and design evolution of our product line, ensuring every detail meets our rigorous standards.",
    socials: { instagram: "https://www.instagram.com/inganatus_sholekhah?igsh=c2FkMjllNTc4M3lj" }
  },
  {
    id: 't3',
    name: "Anggun Valenscia",
    role: "Partnership",
    imageUrl: IMAGES.TEAM.SARAH,
    bio: "Building strategic alliances and cultivating relationships that expand our ecosystem and reach.",
    socials: { instagram: "https://www.instagram.com/anggunvlns?igsh=aTExYXFkYzZybTI5" }
  },
  {
    id: 't4',
    name: "Naura Atira Mardiah",
    role: "Finance and Legality",
    imageUrl: IMAGES.TEAM.JAMES,
    bio: "Ensuring operational excellence, financial integrity, and regulatory compliance across all global operations.",
    socials: { instagram: "https://www.instagram.com/ntrmrdh?igsh=eHIxcHJ0bG0xY2Z1" }
  },
  {
    id: 't5',
    name: "Muhammad Rizki Dwifani",
    role: "Brand, Marketing, and Design",
    imageUrl: IMAGES.TEAM.DAVID,
    bio: "Crafting the narrative that connects our technology with the people who need it most, driving brand resonance.",
    socials: { instagram: "https://www.instagram.com/riz_artline?igsh=MXF6MTFteDJveWJrcg==" }
  }
];