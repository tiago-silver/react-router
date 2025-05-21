// searchParams é uma função que retorna os parametros da url
import { useSearchParams } from "react-router"
export function Products(){
    const [searchParams] = useSearchParams()
    // Pegando o parametro da url
    const category = searchParams.get("category")
    const price = searchParams.get("price")
    return <div>
        <a href="/">Voltar</a>
        <h1>Produtos</h1>

        {
            category && (
                <span>
                    Categoria: <strong>{category}</strong>
                    <br />
                    Preço: <strong>{price}</strong>
                </span>
            )
        }

        <div className="cards">
            <a href="/details/1">Produto 1</a>
            <a href="/details/2">Produto 2</a>
            <a href="/details/3">Produto 3</a>
            <a href="/details/4">Produto 4</a>
            <a href="/details/5">Produto 5</a>
        </div>
    </div>
}