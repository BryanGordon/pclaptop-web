import type { ImageMetadata } from 'astro'
import monitorAsusTuf from '@media/monitores/Monitor Asus TUF; Gaming; 32_ FHD 250HZ; HDMI; VA; Curvo.webp'
import monitorGs27qa from '@media/monitores/Monitor Gigabyte GS27QA; Gaming; 27_ QHD 180HZ; HDMI; IPS Super Speed.webp'
import monitorM27q2 from '@media/monitores/Monitor Gigabyte M27Q2 QD ICE; Gaming; 27_ QHD 200HZ; HDMI; IPS Super Speed; Blanco.webp'
import monitorVortixNova from '@media/monitores/Monitor Indurama Vortix Nova 27; 27_ FHD 120HZ; Panel IPS; HDMI - VGA; Plano.webp'
import cpuIntel14900k from '@media/componentes/Intel Core i9-14900K - LGA 1700 - Procesador.webp'
import gpuGigabyte5060 from '@media/componentes/Tarjeta de video Gigabyte GeForce RTX 5060 - Eagle Max OC Edition 8GB GDDR7.webp'
import imprBrotherT720dw from '@media/impresoras/Brother T720DW; Dúplex, ADF; Imprime; Copia; Escanea; USB; WiFi.webp'
import imprEpsonL4260 from '@media/impresoras/Epson L4260; Dúplex; Imprime; Copia; Escanea; USB; WiFi; Dúplex.webp'
import tecladoDellGamora from '@media/repuestos/[TECL000055] TECLADO DELL GAMORA 15-5567 5575.webp'

export type OtherCategorySlug = 'monitores' | 'componentes' | 'impresoras' | 'repuestos'

export interface OtherCategory {
  slug: OtherCategorySlug
  label: string
  description: string
}

export interface OtherProduct {
  slug: string
  model: string
  category: OtherCategorySlug
  /** Provisional price in USD. Replace with the real catalog price. */
  price: number
  specs: string[]
  image: ImageMetadata
  imageAlt: string
}

export const OTHER_CATEGORIES: OtherCategory[] = [
  { slug: 'monitores', label: 'Monitores', description: 'Gaming, profesional y oficina.' },
  { slug: 'componentes', label: 'Componentes', description: 'Procesadores, tarjetas de video y más.' },
  { slug: 'impresoras', label: 'Impresoras', description: 'Multifuncionales y de alto volumen.' },
  { slug: 'repuestos', label: 'Repuestos', description: 'Repuestos y accesorios originales.' },
]

/**
 * Monitores, componentes, impresoras y repuestos. Same conventions as
 * `products.ts`: technical info is transcribed from the `media` file names
 * (`_` read as the inch mark, `Hz` normalised, truncated fragments left out
 * instead of being invented) and every price is provisional until the user
 * supplies the real catalog prices.
 */
export const OTHER_PRODUCTS: OtherProduct[] = [
  {
    slug: 'asus-tuf-32-curvo',
    model: 'Monitor Asus TUF 32"',
    category: 'monitores',
    price: 320,
    specs: ['32" FHD 250Hz', 'Panel VA', 'HDMI', 'Curvo'],
    image: monitorAsusTuf,
    imageAlt: 'Monitor gaming Asus TUF de 32 pulgadas curvo',
  },
  {
    slug: 'gigabyte-gs27qa',
    model: 'Monitor Gigabyte GS27QA',
    category: 'monitores',
    price: 250,
    specs: ['27" QHD 180Hz', 'Panel IPS Super Speed', 'HDMI'],
    image: monitorGs27qa,
    imageAlt: 'Monitor gaming Gigabyte GS27QA de 27 pulgadas',
  },
  {
    slug: 'gigabyte-m27q2-qd-ice',
    model: 'Monitor Gigabyte M27Q2 QD ICE',
    category: 'monitores',
    price: 300,
    specs: ['27" QHD 200Hz', 'Panel IPS Super Speed', 'HDMI', 'Blanco'],
    image: monitorM27q2,
    imageAlt: 'Monitor gaming Gigabyte M27Q2 QD ICE de 27 pulgadas en blanco',
  },
  {
    slug: 'indurama-vortix-nova-27',
    model: 'Monitor Indurama Vortix Nova 27',
    category: 'monitores',
    price: 170,
    specs: ['27" FHD 120Hz', 'Panel IPS', 'HDMI - VGA', 'Plano'],
    image: monitorVortixNova,
    imageAlt: 'Monitor Indurama Vortix Nova de 27 pulgadas',
  },
  {
    slug: 'intel-core-i9-14900k',
    model: 'Intel Core i9-14900K',
    category: 'componentes',
    price: 550,
    specs: ['LGA 1700'],
    image: cpuIntel14900k,
    imageAlt: 'Procesador Intel Core i9-14900K',
  },
  {
    slug: 'gigabyte-rtx-5060-eagle-max-oc',
    model: 'Tarjeta de video Gigabyte GeForce RTX 5060',
    category: 'componentes',
    price: 380,
    specs: ['Eagle Max OC Edition', '8GB GDDR7'],
    image: gpuGigabyte5060,
    imageAlt: 'Tarjeta de video Gigabyte GeForce RTX 5060 Eagle Max OC',
  },
  {
    slug: 'brother-t720dw',
    model: 'Impresora Brother T720DW',
    category: 'impresoras',
    price: 200,
    specs: ['Imprime, copia, escanea', 'Dúplex y ADF', 'USB', 'WiFi'],
    image: imprBrotherT720dw,
    imageAlt: 'Impresora multifuncional Brother T720DW',
  },
  {
    slug: 'epson-l4260',
    model: 'Impresora Epson L4260',
    category: 'impresoras',
    price: 260,
    specs: ['Imprime, copia, escanea', 'Dúplex', 'USB', 'WiFi'],
    image: imprEpsonL4260,
    imageAlt: 'Impresora multifuncional Epson L4260',
  },
  {
    slug: 'teclado-dell-gamora-15-5567',
    model: 'Teclado Dell Gamora 15-5567 5575',
    category: 'repuestos',
    price: 35,
    specs: ['Código TECL000055'],
    image: tecladoDellGamora,
    imageAlt: 'Teclado de repuesto para laptop Dell Gamora 15-5567',
  },
]

export function getOtherCategory (slug: string): OtherCategory {
  const category = OTHER_CATEGORIES.find((item) => item.slug === slug)
  if (!category) throw new Error(`Unknown other-product category: ${slug}`)
  return category
}

export function getCategoryProducts (slug: OtherCategorySlug): OtherProduct[] {
  return OTHER_PRODUCTS.filter((product) => product.category === slug)
}
