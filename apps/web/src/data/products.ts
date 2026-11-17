import type { ImageMetadata } from 'astro'
import vivobook15 from '@media/pcs/Asus Vivobook 15; Intel Core 7 150U; 16GB RAM; 512GB SSD; 15.6_ FHD; W11; Garantía 2 años.webp'
import tufA15 from '@media/pcs/Asus TUF A15; AMD Ryzen 7 7435HS; NVIDIA RTX 3050 4GB; 8GB RAM; 512GB SSD; 15.6_ FHD 144HZ; W11.webp'
import v16 from '@media/pcs/Asus V16; INTEL CORE 7 240H; NVIDIA RTX 5060 8GB; 16GB RAM; 1TB SSD; 16_ WUXGA 144HZ; W11; Garantía.webp'
import rogStrixG16 from '@media/pcs/Asus ROG Strix G16; AMD Ryzen 9 8940HX; NVIDIA RTX 5070 8GB; 16GB RAM; 1TB SSD; 16_ FHD+ 165HZ; W11;.webp'
import alienwareAurora16 from '@media/pcs/Alienware Aurora 16; Intel Core 9 270H Serie 2; NVIDIA RTX 5060 8GB; 16GB RAM; 1TB SSD; 16_ QHD 120H.webp'
import rogStrixGm700 from '@media/pcs/Desktop Asus ROG Strix GM700; AMD Ryzen 8 8700F; NVIDIA RTX 5060 8GB; 32GB RAM; 1TB SSD; Enfriamient.webp'
import hpOmenMax16 from '@media/pcs/HP Omen Max 16; Intel Core Ultra 9 275HX; NVIDIA RTX 5090 24GB; 64GB RAM; 2TB SSD; 16_ QHD OLED 240H.webp'

export interface Product {
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
 * Full laptop catalog. Single source of truth for every section that lists
 * products; `offers.ts` selects from it.
 *
 * Prices are provisional, same convention as L11: the three that came from the
 * user keep their values, the rest are placeholders to be replaced.
 * Technical info is transcribed from the `media/pcs` file names (`_` read as
 * the inch mark, `W11` shown as `Windows 11`); truncated fragments at the end of
 * a file name are left out instead of being invented.
 * `href` points to the listing until the product detail page exists (T11).
 */
export const PRODUCTS: Product[] = [
  {
    slug: 'asus-vivobook-15',
    model: 'Asus Vivobook 15',
    price: 950,
    specs: [
      'Intel Core 7 150U',
      '16GB RAM',
      '512GB SSD',
      '15.6" FHD',
      'Windows 11',
      'Garantía 2 años',
    ],
    image: vivobook15,
    imageAlt: 'Laptop Asus Vivobook 15 sobre fondo blanco',
    href: '/pcs',
  },
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
  {
    slug: 'alienware-aurora-16',
    model: 'Alienware Aurora 16',
    price: 1750,
    specs: [
      'Intel Core 9 270H Serie 2',
      'NVIDIA RTX 5060 8GB',
      '16GB RAM',
      '1TB SSD',
      '16" QHD 120Hz',
    ],
    image: alienwareAurora16,
    imageAlt: 'Laptop Alienware Aurora 16 sobre fondo blanco',
    href: '/pcs',
  },
  {
    slug: 'asus-rog-strix-gm700',
    model: 'Desktop Asus ROG Strix GM700',
    price: 2100,
    specs: [
      'AMD Ryzen 8 8700F',
      'NVIDIA RTX 5060 8GB',
      '32GB RAM',
      '1TB SSD',
    ],
    image: rogStrixGm700,
    imageAlt: 'Desktop Asus ROG Strix GM700 sobre fondo blanco',
    href: '/pcs',
  },
  {
    slug: 'hp-omen-max-16',
    model: 'HP Omen Max 16',
    price: 3400,
    specs: [
      'Intel Core Ultra 9 275HX',
      'NVIDIA RTX 5090 24GB',
      '64GB RAM',
      '2TB SSD',
      '16" QHD OLED 240Hz',
    ],
    image: hpOmenMax16,
    imageAlt: 'Laptop HP Omen Max 16 sobre fondo blanco',
    href: '/pcs',
  },
]
