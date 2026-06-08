const categorias = ["Todos", "Fideos", "Ñoquis", "Lasagnas", "Rellenas", "Saborizadas"]

export default function Categorias({ onCategoriaChange, categoriaActiva }) {
    return (
        <div className="filtros">
            <h2>Categorías</h2>
            <div className="botones-categoria" id="botonesCategoria">
                {categorias.map((cat) => (
                    <button className={cat === categoriaActiva ? "btn-categoria activo" : "btn-categoria"} key={cat} onClick={() => onCategoriaChange(cat)}>
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    )
}