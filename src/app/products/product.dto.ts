import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

export interface UpdatedProductDto extends Partial<CreateProductDto> { }

export interface GetProductsDto extends Readonly<Partial<Product>> { }

export interface GetProductByIdDto extends Product { }