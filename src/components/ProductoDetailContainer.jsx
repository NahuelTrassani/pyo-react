import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import { db } from '../service/firebase'
import { doc, getDoc } from 'firebase/firestore'
import ItemCount from "./ItemCount";
import { CartContext } from '../context/CartContext'

function ProductoDetailContainer() {
    const [producto, setProducto] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const { addToCart, cart } = useContext(CartContext)

    useEffect(() => {
        const docRef = doc(db, 'items', id)
        getDoc(docRef).then(snapshot => {
            if (snapshot.exists()) {
                setProducto({ ...snapshot.data(), id: snapshot.id })
            }
        })
    }, [id])

    const onAdd = (cantidad) => {
        addToCart(producto, cantidad)
    }

    if (!producto) {
        return <div className="container"><p>Cargando...</p></div>
    }

    const cantidadEnCarrito = cart.find(item => item.id === producto.id)?.cantidad || 0

    return (
        <div className="producto-detail">
            <img src={producto.imagen} className="producto-detail-imagen" alt={producto.nombre} />
            <div className="producto-detail-info">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <div className="producto-detail-precio">${producto.precio}</div>
                <div className="producto-detail-stock">Stock disponible: {producto.stock} unidades</div>
            </div>
            <ItemCount key={cantidadEnCarrito} stock={producto.stock - cantidadEnCarrito} onAdd={onAdd} />
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn-categoria" onClick={() => navigate(-1)}>← Volver</button>
                {cantidadEnCarrito > 0 && <Link to="/cart" className="btn-categoria" style={{ textDecoration: 'none', marginLeft: 'auto' }}>Ir al carrito 🛒 </Link>}
            </div>
        </div>
    )
}
export default ProductoDetailContainer