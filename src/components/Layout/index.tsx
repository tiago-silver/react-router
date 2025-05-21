import "./style.css"

import { Outlet } from "react-router"
export function Layout(){
    return (
        <div>
            <header className="user">
                <p>Olá Tiago!</p>
            </header>

            <Outlet/>

            <footer>
                <span>
                     &copy; Todos os direitos reservados
                </span>
            </footer>
        </div>
    )
}