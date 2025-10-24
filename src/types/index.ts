export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  volume: string;
  pack: string;
  quantity_in_pack: string;
  category: 'mineral' | 'drinking';
  composition: string;
  mineralization: string;
  hardness: string,
  usage: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category: string;
  volume: string;
  search: string;
}