import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Paginas:
//Funcionario
import Home from './pages/Home/index.js';
import Login from './pages/Login/index.js';
import CadastroCliente from './pages/Cadastro/index.js';
import CadastroFuncionario from './pages/CadastroFuncionario/CadastrarLogin/index.js';


//Cliente

function Rotas(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Acesso" component={Login} />
          <Route path="/Cadastro/Cliente" component={CadastroCliente} />
          <Route path="/Cadastro/Funcionario" component={CadastroFuncionario} />
        </Switch>
      </BrowserRouter>
    )
}

export default Rotas;