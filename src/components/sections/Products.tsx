import type { simplifiedProduct } from '@/types';
import ProductCard from '../ProductCard';
import { client } from '@/lib/sanity';

async function getProducts() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc){
  _id,
    price,
    name,
    description,
    doses,
    featured,
    "slug": slug.current,
  "categoryName": category[0]->name,
    "imageUrl": images[0].asset->url
}`;

  return await client.fetch(query);
}

const Products = async () => {
  const products: simplifiedProduct[] = await getProducts();
  return (
    <section className="w-full max-w-[120rem] space-y-5 px-5 pb-16">
      <h3 className="text-black">Novedades</h3>
      <div className="flex snap-x snap-mandatory gap-3 overflow-visible overflow-x-scroll pb-16 first:-mr-5 first:ml-5">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
