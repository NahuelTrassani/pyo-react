import ProductoList from "./ProductoList";
import {getProductos} from "../mock/getProductos";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function ProductosContainer() {
    const [productos, setProductos] = useState([])
    const { type } = useParams()
    const productosFiltrados = productos.filter(p =>
    type ? p.categoria === type : true
)

    useEffect(() => {
        getProductos().then(data => setProductos(data))
    }, [])

    return (
        <div className="container">
            <ProductoList productos={productosFiltrados} />
        </div>
    )
}
export default ProductosContainer
        