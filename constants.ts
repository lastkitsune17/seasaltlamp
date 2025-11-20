import { TeamMember, ProductFeature, ProductImage } from './types';

export const PRODUCT_NAME = "Lumina X1";
export const PRODUCT_TAGLINE = "Redefining the boundaries of minimal aesthetics.";

export const PRODUCT_IMAGES: ProductImage[] = [
  { id: '1', url: 'https://picsum.photos/800/600?random=1', alt: 'Lumina Front View' },
  { id: '2', url: 'https://picsum.photos/800/600?random=2', alt: 'Lumina Side Profile' },
  { id: '3', url: 'https://picsum.photos/800/600?random=3', alt: 'Lumina Lifestyle Shot' },
  { id: '4', url: 'https://picsum.photos/800/600?random=4', alt: 'Lumina Detail' },
  { id: '5', url: 'https://picsum.photos/800/600?random=5', alt: 'Lumina In Action' },
  { id: '6', url: 'https://picsum.photos/800/600?random=6', alt: 'Lumina Abstract' },
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
    imageUrl: "https://picsum.photos/400/400?random=10",
    bio: "Elena brings over 10 years of minimalist design philosophy, formerly at Dieter & Co.",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    id: 't2',
    name: "David Chen",
    role: "Senior Engineer",
    imageUrl: "https://picsum.photos/400/400?random=11",
    bio: "Architect of the Core-X engine. David ensures performance never compromises style.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: 't3',
    name: "Sarah Jones",
    role: "Head of Marketing",
    imageUrl: "https://picsum.photos/400/400?random=12",
    bio: "Storyteller in chief. Sarah connects human needs with technological solutions.",
    socials: { twitter: "#" }
  },
  {
    id: 't4',
    name: "Marcus Thorne",
    role: "CTO",
    imageUrl: "https://picsum.photos/400/400?random=13",
    bio: "Visionary leader focused on sustainable tech and long-term product evolution.",
    socials: { linkedin: "#", github: "#" }
  }
];