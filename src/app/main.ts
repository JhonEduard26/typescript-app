import { addProduct } from "./products/product.service";

addProduct({
  id: 'efsef',
  title: 'mouse',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 100,
  color: 'red',
  description: 'loremeofjsoefijsiofjsfejsf',
  image: 'httpsfsefesfsefesfs',
  isNew: true,
  price: 1000,
  tags: [],
  category: {
    id: 'efesfsef',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'tools'
  }
})