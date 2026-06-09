import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

function CartContainer() {
    const { cart, deleteItem, removeList, getTotalPrecio } = useContext(CartContext)
    if (cart.length === 0) {
        return <div className="cart-container">
            <h2>Tu carrito está vacío</h2>
        </div>
    } else {
        return (
            <div className="cart-container">
                {cart.map(cart => (
                    <CartItem key={cart.id} producto={cart} />
                ))}
            </div>
        )
    }
}

export default CartContainer