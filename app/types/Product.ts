export interface Product {
  id: string | number;
  name: string;
  title?: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  categoryId?: string;
  location?: string;
  condition?: string;
  seller?: {
    name: string;
    rating: string;
  };
  images?: string[];
}
