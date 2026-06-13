import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="container">
            <div className="carrito-vacio">
                <p>🍝</p>
                <p>Página no encontrada</p>
                <Link to='/' className="btn-categoria">Volver a la tienda</Link>
            </div>
        </div>
    )
}
export default NotFound