import { client } from '@/lib/sanity';
import type { Product } from '@/types';

async function getProductPageInformation(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]
{
  "id":_id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category[0]->name
}`;

  return await client.fetch(query);
}

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const data: Product = await getProductPageInformation(params.slug);
  return (
    <div className="pt-40">
      <h1 className="text-4xl">{data.name}</h1>
    </div>
  );
};

export default ProductPage;
