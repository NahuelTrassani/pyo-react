import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (producto, cantidad) => {
        const existe = cart.find(item => item.id === producto.id)
        if (existe) {
            setCart(cart.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + cantidad }
                    : item
            ))
        } else {
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
