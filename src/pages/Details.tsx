import { useParams, useNavigate } from "react-router"
export function Details(){
    const {id} = useParams()

    const navigate = useNavigate()
    return(
        <div>
            {/* navegação recuperando o history */}
            <button type="button" onClick={()=> navigate(-1)}>Voltar</button>
            <h1>Detalhes do produto</h1>

            <span>
                Id do Produto: <strong>{id}</strong>
            </span>
            
        </div>
    )
}