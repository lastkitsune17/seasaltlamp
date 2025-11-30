
// This file serves as the central registry for all images in the application.
// To use your own images:
// 1. Place your image files in the 'public/images/' directory (or equivalent).
// 2. Update the paths below to point to your local files (e.g., '/images/my-hero.jpg').

export const IMAGES = {
  PRODUCT: {
    // Main Hero Image
    HERO: "https://picsum.photos/800/1000?random=99", // Example local: '/images/hero-product.jpg'
    
    // Feature Section Detail Image
    DETAIL: "https://picsum.photos/600/800?random=100", // Example local: '/images/product-detail.jpg'
    
    // Gallery / Marquee Images
    GALLERY: [
      "https://picsum.photos/800/600?random=1",
      "https://picsum.photos/800/600?random=2",
      "https://picsum.photos/800/600?random=3",
      "https://picsum.photos/800/600?random=4",
      "https://picsum.photos/800/600?random=5",
      "https://picsum.photos/800/600?random=6",
    ]
  },
  
  TEAM: {
    ELENA: "https://picsum.photos/400/400?random=10",
    DAVID: "https://picsum.photos/400/400?random=11",
    SARAH: "https://picsum.photos/400/400?random=12",
    MARCUS: "https://picsum.photos/400/400?random=13",
    JAMES: "https://picsum.photos/400/400?random=14",
  },
  
  TEXTURES: {
    CUBES: "https://www.transparenttextures.com/patterns/cubes.png", // Example local: '/images/texture-cubes.png'
  }
};
