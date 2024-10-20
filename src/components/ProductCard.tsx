import type { CardProduct } from '@/types';
import { FeaturedArticleIcon } from './Icons';
import Link from 'next/link';
import AddToCart from './AddToCart';
interface ProductProps {
  product: CardProduct;
}

const ProductCard = ({ product }: ProductProps) => {
  const { price_id, name, price, imageUrl, description, doses, featured } = product;

  return (
    <article className="flex w-full shrink-0 snap-start flex-col gap-5 overflow-visible sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <div className="relative w-full cursor-pointer rounded-2xl border border-gray-200 bg-white">
        <Link href={`/product/${product.slug}`}>
          <img
            src={imageUrl}
            alt="Creatine bottle"
            className="aspect-square w-full object-contain"
          />
          <div className="absolute right-4 top-3 size-8">{featured && <FeaturedArticleIcon />}</div>
          <div className="absolute bottom-2 right-4 space-x-1 text-sm">
            <span className="font-semibold">{doses}</span> doses
          </div>
        </Link>
      </div>
      <div className="space-y-8">
        <div className="space-y-1">
          <h4>{name}</h4>
          <p className="text-base text-neutral-500 sm:text-sm lg:text-lg">{description}</p>
        </div>
        <AddToCart
          name={name}
          price={price}
          currency="EUR"
          description={description}
          image={imageUrl}
          price_id={price_id}
        />
      </div>
    </article>
  );
};

export default ProductCard;
