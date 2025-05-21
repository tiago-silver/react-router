// useNavigate é uma função que permite navegar entre as rotas de forma imperativa
import { useNavigate } from "react-router"
export function Home(){
    // 
    const navigate = useNavigate()
    return <div>
        <h1>Página Home</h1>

        <nav>
            <a href="/products">Produtos</a>
            {/* Passando parâmetros na url */}
            <a href="/products?category=tvs&price=2000">Categoria</a>


            <button type="button" onClick={ ()=> {
                navigate("/products")
            }}>Ver produtos</button>
        </nav>
    </div>
}