import { createContext, useState } from "react"
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (producto, cantidad) => {
        const existe = cart.find(item => item.id === producto.id)
        if (existe) {
            if (existe.cantidad + cantidad > producto.stock) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Stock insuficiente',
                    text: `Solo hay ${producto.stock} unidades disponibles`,
                    confirmButtonColor: '#667eea'
                })
                return
            }
            setCart(cart.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + cantidad }
                    : item
            ))
        } else {
            if (cantidad > producto.stock) return
            setCart([...cart, { ...producto, cantidad }])
        }
    }

    const deleteItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const removeList = () => {
        setCart([])
    }

    const getTotalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const getTotalPrecio = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }

    const restarUnidad = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        ).filter(item => item.cantidad > 0))
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteItem, removeList, getTotalCantidad, getTotalPrecio, restarUnidad }}>
            {children}
        </CartContext.Provider>
    )
}
