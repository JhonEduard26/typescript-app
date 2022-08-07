import { addProduct } from "./products/product.service";

addProduct({
  id: 1,
  title: 'mouse',
  createdAt: new Date(),
  stock: 100,
  category: {
    id: '323hisefse23',
    name: 'tools'
  }
})