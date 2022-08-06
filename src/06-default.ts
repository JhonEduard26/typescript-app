export const createProduct = (
  id: (string | number),
  isNew: boolean = true,
  stock: number = 10,
) => ({
  id,
  isNew,
  stock,
})

const product1 = createProduct(1, true, 12)
const product2 = createProduct(2, false, 0)
const product3 = createProduct(3)
const product4 = createProduct(4, true, 100)

console.log(product1)
console.log(product2)
console.log(product3)
console.log(product4)