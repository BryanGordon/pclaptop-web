/**
 * Contact data for the whole site (footer and contact page).
 *
 * The email and the location come from the project: `ventas@pclaptop.com` was
 * already the footer address and the user gave "Parque La Carolina, Quito,
 * Ecuador". The phone is still a placeholder (`+00 000 000 000`), same as the
 * footer had, until the client supplies the real number.
 */
export const CONTACT = {
  email: 'ventas@pclaptop.com',
  /** Provisional: replace with the real store phone. */
  phone: '+00 000 000 000',
  /** Provisional: replace with the real store phone. */
  phoneHref: 'tel:+000000000',
  address: 'Parque La Carolina, Quito, Ecuador',
  /**
   * OpenStreetMap embed centred on Parque La Carolina. The coordinates come
   * from Nominatim for that park; the marker is its centre, not a store door.
   * The bbox is park-scale and roughly 3.26:1 (the map box ratio) so the embed
   * does not zoom out to fit a taller area.
   */
  mapEmbedSrc:
    'https://www.openstreetmap.org/export/embed.html?bbox=-78.4912027%2C-0.185873%2C-78.4782027%2C-0.181873&layer=mapnik&marker=-0.183873%2C-78.4847027',
  mapHref:
    'https://www.openstreetmap.org/?mlat=-0.183873&mlon=-78.4847027#map=16/-0.183873/-78.4847027',
}
