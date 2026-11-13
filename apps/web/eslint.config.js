import neostandard from 'neostandard'
import astro from 'eslint-plugin-astro'

export default [
  {
    ignores: ['dist/', '.astro/', 'node_modules/', 'public/'],
  },
  ...neostandard({ ts: true }),
  ...astro.configs.recommended,
]
