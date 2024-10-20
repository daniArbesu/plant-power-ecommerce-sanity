import type { CardProduct } from '@/types';
import ProductCard from '../ProductCard';
import { client } from '@/lib/sanity';

async function getProducts() {
  const query = `*[_type == "product"][0...10] | order(_createdAt desc){
    "id":_id,
    price,
    name,
    description,
    doses,
    featured,
    "slug": slug.current,
    price_id,
  "categoryName": category[0]->name,
    "imageUrl": images[0].asset->url
}`;

  return await client.fetch(query, undefined, {
    next: {
      revalidate: 60, // for simple, time-based revalidation in seconds
    },
  });
}

const Products = async () => {
  const products: CardProduct[] = await getProducts();
  return (
    <section className="w-full max-w-[120rem] space-y-5 px-5 pb-16">
      <h3 className="text-black">Novedades</h3>
      <div className="flex snap-x snap-mandatory gap-3 overflow-visible overflow-x-scroll pb-16 first:-mr-5 first:ml-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
