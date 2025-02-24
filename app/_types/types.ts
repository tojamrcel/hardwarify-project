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
  firstName: string;
  lastName: string;
}

export interface Profile {
  email: string;
  image: string;
  firstName: string;
  lastName: string;
}

export interface UploadImage {
  image: File;
}

export interface OrderForm {
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  postal_code: string;
  address: string;
  products: CartProduct[];
}
