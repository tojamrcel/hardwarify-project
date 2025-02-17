export interface Product {
  id: number;
  product_name: string;
  regular_price: number;
  discount: number | null;
  description: string;
  category: string;
  image: string;
  availability: number;
}

export interface ProductWithDiscount extends Product {
  discountPercent: number | null;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}
