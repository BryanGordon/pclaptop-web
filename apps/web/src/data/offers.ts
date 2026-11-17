import { PRODUCTS, type Product } from './products'

export type Offer = Product

/** Products featured in the home offers section, in display order. */
const OFFERED_SLUGS = ['asus-tuf-a15', 'asus-v16', 'asus-rog-strix-g16']

/**
 * Home offers. Prices are provisional (requested by the user in L11) and the
 * technical info is taken from the media file names.
 * `href` points to the listing until the product detail page exists (T11).
 */
export const OFFERS: Offer[] = OFFERED_SLUGS.map((slug) => {
  const product = PRODUCTS.find((item) => item.slug === slug)

  if (!product) {
    throw new Error(`Unknown offer slug: ${slug}`)
  }

  return product
})
