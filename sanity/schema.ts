import { type SchemaTypeDefinition } from 'sanity'
import Products from './lib/Products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products],
}
