export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  images: any[];
  featured: boolean;
  doses: number;
  price: number;
  categoryName: string;
}

export type CardProduct = Omit<Product, 'imageUrl'> & {
  imageUrl: string;
};
