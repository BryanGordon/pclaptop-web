import type { ImageMetadata } from 'astro'
import gigabyteA16 from '@media/banners/BANNER_GIGABYTE_A16.webp'
import expertBook from '@media/banners/banner_homepage_asus_expertbook.webp'
import zenbook14 from '@media/banners/banner_zenbook_14_oled.webp'

export interface HomeBanner {
  slug: string
  brand: string
  image: ImageMetadata
  imageAlt: string
  href: string
  size: 'wide' | 'small'
}

/**
 * Home bento banners. The caption carries the brand, not the model: the section
 * promotes brands. Every banner links to the PC listing until the product
 * detail page (T11) exists.
 */
export const HOME_BANNERS: HomeBanner[] = [
  {
    slug: 'gigabyte-gaming-a16',
    brand: 'Gigabyte',
    image: gigabyteA16,
    imageAlt: 'Laptop Gigabyte Gaming A16 encendida sobre un fondo oscuro',
    href: '/equipos',
    size: 'wide',
  },
  {
    slug: 'asus-expertbook',
    brand: 'Asus Empresarial',
    image: expertBook,
    imageAlt: 'Laptop Asus ExpertBook de negocios sobre un fondo claro',
    href: '/equipos',
    size: 'small',
  },
  {
    slug: 'asus-zenbook-14-oled',
    brand: 'Asus',
    image: zenbook14,
    imageAlt: 'Laptop Asus Zenbook 14 OLED abierta sobre una superficie gris, vista desde atrás',
    href: '/equipos',
    size: 'small',
  },
]
