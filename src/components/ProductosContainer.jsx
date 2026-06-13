import ProductoList from "./ProductoList";
import { db } from '../service/firebase'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'

function ProductosContainer() {
    const [productos, setProductos] = useState([])
    const { type } = useParams()
    const productosFiltrados = productos.filter(p =>
        type ? p.categoria === type : true
    )
    const [loading, setLoading] = useState(false)

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

    return (
        <div className="container">
            <ProductoList productos={productos} />
        </div>
    )
}
export default ProductosContainer
