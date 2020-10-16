import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Pages/LoginCadastro';
import Home  from './Pages/Home'

function Rotas(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login}/>
          <Route path="/Home" component={Home}/>
        </Switch>
      </BrowserRouter>
    )
}

export default Rotas;