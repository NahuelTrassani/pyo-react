import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function CartItem({ producto }) {
    const { deleteItem } = useContext(CartContext)
    return (
        <div className="carrito-item">
            <img src={producto.imagen} className="carrito-item-imagen" alt={producto.nombre} />
            <div className="item-info">
                <div className="item-nombre">{producto.nombre}</div>
                <div className="item-precio">${producto.precio}</div>
                <div>Cantidad: {producto.cantidad}</div>
                <div>Subtotal: ${producto.precio * producto.cantidad}</div>
            </div>
            <button className="btn-eliminar" onClick={() => deleteItem(producto.id)}>🗑️</button>
        </div>
    )
}
export default CartItem