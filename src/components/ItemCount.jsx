import { useState } from 'react'

function ItemCount({ stock, onAdd }) {
    const initial = 0
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }
    if (stock === 0) return (
        <div style={{ padding: '1rem 2rem' }}>
            <span className="btn-agregar" style={{ display: 'block', textAlign: 'center', opacity: 0.5, cursor: 'not-allowed' }}>Sin stock</span>
        </div>
    )
    return (
        <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="item-controles">
                <button className="btn-cantidad" onClick={decrement}>-</button>
                <span className="cantidad">{count}</span>
                <button className="btn-cantidad" onClick={increment}>+</button>
            </div>
            <button className="btn-agregar" onClick={() => onAdd(count)} disabled={count === 0}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount

