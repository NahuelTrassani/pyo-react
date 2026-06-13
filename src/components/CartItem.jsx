import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartItem({ producto }) {
    const { addToCart, restarUnidad, deleteItem } = useContext(CartContext)
    return (
        <div className="carrito-item">
            <img src={producto.imagen} className="carrito-item-imagen" alt={producto.nombre} />
            <div className="item-info">
                <div className="item-nombre">{producto.nombre}</div>
                <div className="item-precio">${producto.precio * producto.cantidad}</div>
            </div>
            <div className="item-controles">
                <button className="btn-cantidad" onClick={() => restarUnidad(producto.id)}>-</button>
                <span className="cantidad">{producto.cantidad}</span>
                <button className="btn-cantidad" onClick={() => addToCart(producto, 1)}>+</button>
            </div>
            <button className="btn-eliminar" onClick={() => deleteItem(producto.id)}>🗑️</button>
        </div>
    )
}
export default CartItem