import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login/index.js';
import Home  from './Pages/Home';
import Cadastro from './Pages/Cadastro';
import EsqueciSenha from './Pages/EsqueciSenha';
<<<<<<< HEAD
import CadastrarLogin from './Pages/CadastroFuncionario/CadastrarLogin'
=======
import Master from './Pages/Master/index';
>>>>>>> 0a03bb97eddeaa1c3bf661b58b7739838c090e37

function Rotas(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Cadastro" component={Cadastro}/>
          <Route path="/EsqueciSenha" component={EsqueciSenha}/>
<<<<<<< HEAD

          <Route path="/Funcionario/Cadastro/Login" component={CadastrarLogin}/>

=======
          <Route path="/Master" component={Master}/>
>>>>>>> 0a03bb97eddeaa1c3bf661b58b7739838c090e37
        </Switch>
      </BrowserRouter>
    )
}

export default Rotas;