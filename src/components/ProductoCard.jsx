import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function ProductoCard({ producto }) {
    const { addToCart } = useContext(CartContext)
    return (
        <div className="producto-card">
            <img src={producto.imagen} className="producto-imagen" alt={producto.nombre} />
            <div className="producto-categoria">{producto.categoria}</div>
            <div className="producto-nombre">{producto.nombre}</div>
            <div className="producto-descripcion">{producto.descripcion}</div>
            <div className="producto-precio">${producto.precio}</div>
            <button className="btn-agregar" onClick={() => addToCart(producto, 1)} disabled={producto.stock === 0}>
                {producto.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
            </button>
            <Link to={`/item/${producto.id}`} className="btn-detalle">
                Ver detalle
            </Link>
        </div>
    )
}
export default ProductoCard