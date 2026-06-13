import ProductoList from "./ProductoList";
import { db } from '../service/firebase'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'

function ProductosContainer() {
    const [productos, setProductos] = useState([])
    const { type } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const col = collection(db, 'items')
        const q = type ? query(col, where('categoria', '==', type)) : col
        getDocs(q).then(snapshot => {
            const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setProductos(data)
            setLoading(false)
        })
    }, [type])

    if (loading) return <div className="container"><p>Cargando...</p></div>

    if (!loading && productos.length === 0) return (
        <div className="container">
            <div className="carrito-vacio">
                <p>🍝</p>
                <p>No hay productos en esta categoría</p>
            </div>
        </div>
    )
    
    return (
        <div className="container">
            <ProductoList productos={productos} />
        </div>
    )
}
export default ProductosContainer
