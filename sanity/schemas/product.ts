export default {
  name: 'product',
  title: 'Plant Power Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {name: 'slug', type: 'slug', title: 'Product Slug', options: {source: 'name'}},
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'doses',
      title: 'Doses',
      type: 'number',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'price_id',
      title: 'Stripe Price id',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Product Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],
}
