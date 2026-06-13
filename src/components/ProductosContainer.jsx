import ProductoList from "./ProductoList";
import { db } from '../service/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function ProductosContainer() {
    const [productos, setProductos] = useState([])
    const { type } = useParams()
    const productosFiltrados = productos.filter(p =>
        type ? p.categoria === type : true
    )
    useEffect(() => {
        const col = collection(db, 'items')
        getDocs(col).then(snapshot => {
            const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setProductos(data)
        })
    }, [])

    return (
        <div className="container">
            <ProductoList productos={productosFiltrados} />
        </div>
    )
}
export default ProductosContainer
