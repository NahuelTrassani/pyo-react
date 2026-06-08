import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getProductos } from "../mock/getProductos";
import { useNavigate } from 'react-router-dom'

function ProductoDetailContainer() {
    const [producto, setProducto] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getProductos().then(data => {
            const productoEncontrado = data.find(p => p.id === parseInt(id))
            setProducto(productoEncontrado)
        })
    }, [id])
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
            <button onClick={() => navigate(-1)}>← Volver</button>

        </div>
    )
}
export default ProductoDetailContainer
