import type { ImageMetadata } from 'astro'
import gigabyteA16 from '@media/banners/BANNER_GIGABYTE_A16.webp'
import expertBook from '@media/banners/banner_homepage_asus_expertbook.webp'
import zenbook14 from '@media/banners/banner_zenbook_14_oled.webp'

export interface HomeBanner {
  slug: string
  model: string
  image: ImageMetadata
  imageAlt: string
  href: string
  size: 'wide' | 'small'
}

/**
 * Home bento banners. Every banner links to the PC listing until the product
 * detail page (T11) exists.
 */
export const HOME_BANNERS: HomeBanner[] = [
  {
    slug: 'gigabyte-gaming-a16',
    model: 'Gigabyte Gaming A16',
    image: gigabyteA16,
    imageAlt: 'Laptop Gigabyte Gaming A16 encendida sobre un fondo oscuro',
    href: '/pcs',
    size: 'wide',
  },
  {
    slug: 'asus-expertbook',
    model: 'Asus ExpertBook',
    image: expertBook,
    imageAlt: 'Laptop Asus ExpertBook de negocios sobre un fondo claro',
    href: '/pcs',
    size: 'small',
  },
  {
    slug: 'asus-zenbook-14-oled',
    model: 'Asus Zenbook 14 OLED',
    image: zenbook14,
    imageAlt: 'Laptop Asus Zenbook 14 OLED abierta sobre una superficie gris, vista desde atrás',
    href: '/pcs',
    size: 'small',
  },
]
