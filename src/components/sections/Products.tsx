import { products } from '@/mocks/products';
import ProductCard from '../ProductCard';

const Products = () => {
  return (
    <section className="w-full max-w-[120rem] space-y-5 px-5 pb-16">
      <h3 className="text-black">PRODUTOS</h3>
      <div className="flex snap-x snap-mandatory gap-3 overflow-visible overflow-x-scroll pb-16 first:-mr-5 first:ml-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
