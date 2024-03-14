import { Rule } from 'postcss'
import { defineField, defineType, defineArrayMember } from 'sanity'

export const post = defineType({
 name: "post",
 type: "document",
 title: "Post",
 fields: [
  defineField({
   name: "title",
   type: "string",
   title: "Post1",
   validation: Rule => Rule.required()
  }),
  defineField({
   name: "slug",
   type: "slug",
   title: "Slug",
   options: {
    source: "title",
    maxLength: 96
   },
   validation: Rule => Rule.required()
  }),
  defineField({
   name: "summary",
   type: "text",
   title: "Summary",
   validation: Rule => Rule.required()
  }),
  defineField({
   name: "image",
   type: "image",
   title: "Image"
  }),
  defineField({
   name: "content",
   type: "array",
   title: "Content",
   of: [
    defineArrayMember({
     type: "block"
    })
   ]
  }),
  defineField({
   name: "author",
   type: "reference",
   title: "Author",
   to: [{
    type: "author"
   }]
  })

 ]
})