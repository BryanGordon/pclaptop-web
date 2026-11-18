const priceFormatter = new Intl.NumberFormat('es-EC', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

/** Catalog price in USD without decimals, e.g. 1450 -> "$1.450". */
export const formatPrice = (value: number) => priceFormatter.format(value)
