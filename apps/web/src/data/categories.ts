import type { ImageMetadata } from 'astro'
import monitorGigabyte from '@media/monitores/Monitor Gigabyte M27Q2 QD ICE; Gaming; 27_ QHD 200HZ; HDMI; IPS Super Speed; Blanco.webp'
import tarjetaVideo from '@media/componentes/Tarjeta de video Gigabyte GeForce RTX 5060 - Eagle Max OC Edition 8GB GDDR7.webp'
import impresoraEpson from '@media/impresoras/Epson L4260; Dúplex; Imprime; Copia; Escanea; USB; WiFi; Dúplex.webp'
import tecladoDell from '@media/repuestos/[TECL000055] TECLADO DELL GAMORA 15-5567 5575.webp'

export interface ProductCategory {
  slug: string
  label: string
  image: ImageMetadata
  imageAlt: string
  href: string
}

/**
 * Home category tiles. Each one links to its own landing page, built in T8.
 */
export const CATEGORY_TILES: ProductCategory[] = [
  {
    slug: 'monitores',
    label: 'Monitores',
    image: monitorGigabyte,
    imageAlt: 'Monitor gaming Gigabyte M27Q2 de 27 pulgadas en color blanco',
    href: '/otros-productos/monitores',
  },
  {
    slug: 'componentes',
    label: 'Componentes',
    image: tarjetaVideo,
    imageAlt: 'Tarjeta de video Gigabyte GeForce RTX 5060 Eagle Max OC',
    href: '/otros-productos/componentes',
  },
  {
    slug: 'impresoras',
    label: 'Impresoras',
    image: impresoraEpson,
    imageAlt: 'Impresora multifuncional Epson L4260',
    href: '/otros-productos/impresoras',
  },
  {
    slug: 'repuestos',
    label: 'Repuestos',
    image: tecladoDell,
    imageAlt: 'Teclado de repuesto para laptop Dell GAMORA 15-5567',
    href: '/otros-productos/repuestos',
  },
]
