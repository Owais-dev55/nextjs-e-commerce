import { defineType, defineField } from "sanity";

export const ApiProducts =  defineType({
  name: "apiproduct",
  title: "ApiProduct",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
      hidden: true, 
    }),
    defineField({
      name: "Title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "Description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "BulletPoints",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "DiscountedPrice",
      title: "Discounted Price",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "OriginalPrice",
      title: "Original Price",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "MainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "Images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "DescriptionImages",
      title: "Description Images",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "Category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "Tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "Rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: "Reviews",
      title: "Reviews",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "Stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "Colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
