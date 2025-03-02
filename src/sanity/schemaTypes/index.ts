import { type SchemaTypeDefinition } from 'sanity'
import { product } from './Schema'
import {user} from './User'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , user],
}
