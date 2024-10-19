import type { Product } from '@/types';
import { FeaturedArticleIcon } from './Icons';

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  const { name, image, description, doses, featured } = product;

  return (
    <article className="flex w-full shrink-0 snap-start flex-col gap-5 overflow-visible sm:basis-1/2 md:basis-1/3">
      <div className="relative w-full cursor-pointer rounded-2xl border border-gray-200 bg-white">
        <a href="/products/creatine">
          <img src={image} alt="Creatine bottle" className="aspect-square w-full object-contain" />
          <div className="absolute right-4 top-3 size-8">{featured && <FeaturedArticleIcon />}</div>
          <div className="absolute bottom-2 right-4 space-x-1 text-sm">
            <span className="font-semibold">{doses}</span> doses
          </div>
        </a>
      </div>
      <div className="space-y-8">
        <div className="space-y-1">
          <h4>{name}</h4>
          <p className="text-base text-neutral-500 sm:text-sm">{description}</p>
        </div>
        <button className="font-display w-1/2 rounded-[2.5rem] bg-black px-4 py-3 uppercase text-white">
          Comprar
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
