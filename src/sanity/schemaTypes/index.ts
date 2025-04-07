import { type SchemaTypeDefinition } from 'sanity'
import { product } from './Schema'
import {ApiProducts} from '@/sanity/schemaTypes/ApiProducts'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , ApiProducts],
}
