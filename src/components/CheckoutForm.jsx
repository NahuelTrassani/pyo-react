import { useState, useContext } from 'react'
import { db } from '../service/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

function CheckoutForm() {
    const { cart, getTotalPrecio, removeList } = useContext(CartContext)
    const [form, setForm] = useState({ nombre: '', email: '', telefono: '' })
    const [orderId, setOrderId] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    if (cart.length === 0 && !orderId) {
        navigate('/cart')
        return null
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const orden = {
            buyer: form,
            items: cart,
            total: getTotalPrecio(),
            fecha: serverTimestamp()
        }
        addDoc(collection(db, 'orders'), orden).then(docRef => {
            setOrderId(docRef.id)
            removeList()
            setLoading(false)
        })
    }



    if (orderId) {
        return (
            <div className="container">
                <div className="carrito-vacio">
                    <p>✅</p>
                    <p>¡Gracias por tu compra!</p>
                    <p>Tu número de orden es: <strong>{orderId}</strong></p>
                    <Link to='/' className="btn-categoria" style={{ marginTop: '1rem' }}>Volver a la tienda</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="modal-contenido">
                <div className="modal-header">
                    <h2>📦 Datos de Envío</h2>
                </div>
                <form onSubmit={handleSubmit} className="checkout-form">
                    <h2>Finalizar compra</h2>
                    <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
                    <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                    <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required />
                    <button type="submit" className="btn-finalizar" disabled={loading}>
                        {loading ? 'Procesando...' : 'Confirmar orden'}
                    </button>
                </form>
            </div>
        </div>
    )
}
export default CheckoutForm