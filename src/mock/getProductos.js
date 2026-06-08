import productosData from '../data/productos.json'

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productosData)
    }, 1000)
  })
}