import { faker } from '@faker-js/faker';
import { addProduct, products } from "./products/product.service";

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

console.log(products)