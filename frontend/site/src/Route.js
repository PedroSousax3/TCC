import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login/index.js';
import Home  from './Pages/Home';
import Cadastro from './Pages/Cadastro';
import EsqueciSenha from './Pages/EsqueciSenha';
import Master from './Pages/Master/index';

function Rotas(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Cadastro" component={Cadastro}/>
          <Route path="/EsqueciSenha" component={EsqueciSenha}/>
          <Route path="/Master" component={Master}/>
        </Switch>
      </BrowserRouter>
    )
}

export default Rotas;