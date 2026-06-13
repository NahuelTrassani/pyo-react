import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { db } from '../service/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import ItemCount from "./ItemCount";
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ProductoDetailContainer() {
    const [producto, setProducto] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const docRef = doc(db, 'items', id)
        getDoc(docRef).then(snapshot => {
            setProducto({ id: snapshot.id, ...snapshot.data() })
        })
    }, [id])

    const { addToCart } = useContext(CartContext)

    const onAdd = (cantidad) => {
        addToCart(producto, cantidad)
    }

    if (!producto) {
        return <div>Cargando...</div>
    }
    return (
        <div className="producto-detail">
            <img src={producto.imagen} className="producto-detail-imagen" alt={producto.nombre} />
            <div className="producto-detail-info">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <div className="producto-detail-precio">${producto.precio}</div>
            </div>
            <ItemCount stock={producto.stock} onAdd={onAdd} />
            <button onClick={() => navigate(-1)}>← Volver</button>

        </div>
    )
}
export default ProductoDetailContainer
