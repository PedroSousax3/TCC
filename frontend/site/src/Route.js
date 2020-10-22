import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Paginas:
//Funcionario
import Home from './pages/Home/index.js';
import Login from './pages/Login/index.js';
import CadastroCliente from './pages/Cadastro/index.js';
import CadastroFuncionario from './pages/CadastroFuncionario/CadastrarLogin/index.js';

import CadastrarLogin from './Pages/CadastroFuncionario/CadastrarLogin' 
import CadastrarFuncionario from "./Pages/CadastroFuncionario/CadastrarFuncionario"
import Master from './Pages/Master/index';
import Cadastro from './Pages/Cadastro';
import EsqueciSenha from './Pages/EsqueciSenha';
import MinhasCompras from './Pages/MinhasCompras';
import Perfil from './Pages/Perfil';
import Favoritos  from './Pages/Favoritos';
import Carrinho from './Pages/Carrinho';


//Cliente

function Rotas(){
    return(
      <BrowserRouter>
        <Switch>

          <Route path="/" exact={true} component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Cadastro" component={Cadastro}/>
          <Route path="/EsqueciSenha" component={EsqueciSenha}/>

          <Route path="/Funcionario/Cadastro"  exact={true} component={CadastrarFuncionario}/>
          <Route path="/Funcionario/Cadastro/Login" component={CadastrarLogin}/>




          <Route path="/Master" component={Master}/>

          <Route path="/MinhasCompras" component={MinhasCompras}/>
          <Route path="/Favoritos" component={Favoritos}/>
          <Route path="/Perfil" component={Perfil}/>
          <Route path="/Carrinho" component={Carrinho}/>

          <Route path="/Acesso" component={Login} />
          <Route path="/Cadastro/Cliente" component={CadastroCliente} />

        </Switch>
      </BrowserRouter>
    )
}

export default Rotas;