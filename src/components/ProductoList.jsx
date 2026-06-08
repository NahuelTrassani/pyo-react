import ProductoCard from './ProductoCard'

function ProductoList({ productos }) {
    return (
        <div className="productos-grid">
            {productos.map(producto => (
                <ProductoCard key={producto.id} producto={producto} />
            ))}
        </div>
    )
}
export default ProductoList