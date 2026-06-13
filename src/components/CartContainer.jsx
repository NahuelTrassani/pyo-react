import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

function CartContainer() {
    const { cart, removeList, getTotalPrecio } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container">
                <div className="carrito-vacio">
                    <p>🛒</p>
                    <p>Tu carrito está vacío</p>
                    <Link to='/' className="btn-categoria">Ver productos</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            {cart.map(item => (
                <CartItem key={item.id} producto={item} />
            ))}
            <div className="carrito-total">
                <span className="total-text">Total:</span>
                <span className="total-monto">${getTotalPrecio()}</span>
            </div>
            <Link to='/checkout' className="btn-finalizar">Finalizar compra</Link>
            <button className="btn-categoria" onClick={removeList}>Vaciar carrito</button>
        </div>
    )
}
export default CartContainer