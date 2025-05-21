import {Routes, Route} from 'react-router'

import { Home} from "../pages/Home"
import { Products} from "../pages/Products"
import { NotFound} from "../pages/NotFound"
import { Details} from "../pages/Details"
import { Layout } from '../components/Layout'


export function AppRoutes(){
    return(
        <Routes>

            <Route path='/' element={<Layout/>}>
                  <Route path='/' index element={<Home/>}/>

                <Route path='/products' element= {<Products/>}/>

                <Route path='/details/:id' element={<Details/>}/>
            
            </Route>
            {/* A propriedade index deixa explicito a rota raiz */}
          

            {/* Caso não encontre nenhuma rota */}
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}