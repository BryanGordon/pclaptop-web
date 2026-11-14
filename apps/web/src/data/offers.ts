import type { ImageMetadata } from 'astro'
import tufA15 from '@media/pcs/Asus TUF A15; AMD Ryzen 7 7435HS; NVIDIA RTX 3050 4GB; 8GB RAM; 512GB SSD; 15.6_ FHD 144HZ; W11.webp'
import v16 from '@media/pcs/Asus V16; INTEL CORE 7 240H; NVIDIA RTX 5060 8GB; 16GB RAM; 1TB SSD; 16_ WUXGA 144HZ; W11; Garantía.webp'
import rogStrixG16 from '@media/pcs/Asus ROG Strix G16; AMD Ryzen 9 8940HX; NVIDIA RTX 5070 8GB; 16GB RAM; 1TB SSD; 16_ FHD+ 165HZ; W11;.webp'

export interface Offer {
  slug: string
  model: string
  /** Provisional price in USD. Replace with the real catalog price. */
  price: number
  specs: string[]
  image: ImageMetadata
  imageAlt: string
  href: string
}

/**
 * Home offers. Prices are provisional (requested by the user in L11) and the
 * technical info is taken from the media file names.
 * `href` points to the listing until the product detail page exists (T11).
 */
export const OFFERS: Offer[] = [
  {
    slug: 'asus-tuf-a15',
    model: 'Asus TUF A15',
    price: 1450,
    specs: [
      'AMD Ryzen 7 7435HS',
      'NVIDIA RTX 3050 4GB',
      '8GB RAM',
      '512GB SSD',
      '15.6" FHD 144Hz',
      'Windows 11',
    ],
    image: tufA15,
    imageAlt: 'Laptop gaming Asus TUF A15 con teclado retroiluminado',
    href: '/pcs',
  },
  {
    slug: 'asus-v16',
    model: 'Asus V16',
    price: 1500,
    specs: [
      'Intel Core 7 240H',
      'NVIDIA RTX 5060 8GB',
      '16GB RAM',
      '1TB SSD',
      '16" WUXGA 144Hz',
      'Windows 11',
    ],
    image: v16,
    imageAlt: 'Laptop Asus V16 con pantalla de 16 pulgadas',
    href: '/pcs',
  },
  {
    slug: 'asus-rog-strix-g16',
    model: 'Asus ROG Strix G16',
    price: 1650,
    specs: [
      'AMD Ryzen 9 8940HX',
      'NVIDIA RTX 5070 8GB',
      '16GB RAM',
      '1TB SSD',
      '16" FHD+ 165Hz',
      'Windows 11',
    ],
    image: rogStrixG16,
    imageAlt: 'Laptop gaming Asus ROG Strix G16',
    href: '/pcs',
  },
]
