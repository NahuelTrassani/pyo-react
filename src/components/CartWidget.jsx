import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartWidget() {
    const { getTotalCantidad } = useContext(CartContext)

    return (
        <button className="carrito-btn" id="btnCarrito">
            🛒 Carrito
            <span className="badge" id="cantidadCarrito">{getTotalCantidad()}</span>
        </button>
    )
}
export default CartWidget
