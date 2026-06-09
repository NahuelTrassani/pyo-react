import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
    const { getTotalCantidad } = useContext(CartContext)

    return (
        <Link to='/cart' className="carrito-btn">
            🛒 Carrito
            <span className="badge">{getTotalCantidad()}</span>
        </Link>
    )
}
export default CartWidget
