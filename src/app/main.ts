import { faker } from '@faker-js/faker';
import { addProduct, products, updateProduct } from "./products/product.service";

addProduct({
  title: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(10, 2000, 0, '$'),
  color: faker.commerce.color(),
  stock: 100,
  image: faker.image.imageUrl(),
  isNew: faker.datatype.boolean(),
  tags: [],
  categoryId: faker.datatype.uuid()
})

const product = products[0]

updateProduct(product.id, {
  title: 'a random title :)',
  stock: 5000,
})

console.log(products)