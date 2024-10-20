export interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  description: string;
  featured: boolean;
  doses: number;
}

export interface simplifiedProduct {
  _id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  doses: number;
  featured: boolean;
  slug: string;
  categoryName: string;
}
