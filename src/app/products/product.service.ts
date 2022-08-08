import { faker } from '@faker-js/faker'
import { CreateProductDto } from './product.dto'
import { Product } from './product.model'

export const products: Product[] = []

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.database.mongodbObjectId(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.future(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
    }
  }
  products.push(newProduct)
  return newProduct
}

export const updatedProduct = (id: string, changes: Product) => {
  // TODO
}

export const getProductById = (id: string) => {
  // TODO
}

export const deleteProduct = (id: string) => {
  // TODO
}