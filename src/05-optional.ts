const createProduct = (
  id: (string | number),
  isNew?: boolean,
  stock?: number,
) => ({
  id,
  isNew: isNew ?? true,
  stock: stock ?? 10,
})

const product1 = createProduct(1, true, 12)
const product2 = createProduct(2, false)
const product3 = createProduct(3)

console.log(product1)
console.log(product2)
console.log(product3)