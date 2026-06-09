import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
export default function NavBar() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header-content">
                        <h1>🍝 Pimienta & Orégano</h1>
                        <CartWidget />
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="filtros">
                    <h2>Categorías</h2>
                    <div className="botones-categoria">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'btn-categoria activo' : 'btn-categoria'}>Todos</NavLink>
                        <NavLink to='/category/Fideos' className={({ isActive }) => isActive ? 'btn-categoria activo' : 'btn-categoria'}>Fideos</NavLink>
                        <NavLink to='/category/Ñoquis' className={({ isActive }) => isActive ? 'btn-categoria activo' : 'btn-categoria'}>Ñoquis</NavLink>
                        <NavLink to='/category/Lasagnas' className={({ isActive }) => isActive ? 'btn-categoria activo' : 'btn-categoria'}>Lasagnas</NavLink>
                        <NavLink to='/category/Rellenas' className={({ isActive }) => isActive ? 'btn-categoria activo' : 'btn-categoria'}>Rellenas</NavLink>
                        <NavLink to='/category/Saborizadas' className={({ isActive }) => isActive ? 'btn-categoria activo' : 'btn-categoria'}>Saborizadas</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}