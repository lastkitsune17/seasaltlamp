
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
    name: "Elena Fisher",
    role: "Lead Product Designer",
    imageUrl: IMAGES.TEAM.ELENA,
    bio: "Elena brings over 10 years of minimalist design philosophy, formerly at Dieter & Co.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    id: 't2',
    name: "David Chen",
    role: "Senior Engineer",
    imageUrl: IMAGES.TEAM.DAVID,
    bio: "Architect of the Core-X engine. David ensures performance never compromises style.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: 't3',
    name: "Sarah Jones",
    role: "Head of Marketing",
    imageUrl: IMAGES.TEAM.SARAH,
    bio: "Storyteller in chief. Sarah connects human needs with technological solutions.",
    socials: { twitter: "#" }
  },
  {
    id: 't4',
    name: "Marcus Thorne",
    role: "CTO",
    imageUrl: IMAGES.TEAM.MARCUS,
    bio: "Visionary leader focused on sustainable tech and long-term product evolution.",
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: 't5',
    name: "James Wilson",
    role: "Supply Chain Lead",
    imageUrl: IMAGES.TEAM.JAMES,
    bio: "Ensuring sustainable and ethical sourcing for every material used in Lumina X1.",
    socials: { linkedin: "#" }
  }
];
