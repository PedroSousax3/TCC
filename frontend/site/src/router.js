import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Paginas:
//Funcionario
import Home from './Pages/Home/index.js';
import Login from './Pages/Login/index.js';
import Cadastro from './Pages/Cadastro/index';


import CadastroLogin from './Pages/CadastroFuncionario/CadastrarLogin' 

import CadastrarFuncionario from "./Pages/CadastroFuncionario/CadastrarFuncionario"

import Master from './Pages/Master/index';
import EsqueciSenha from './Pages/EsqueciSenha';
import MinhasCompras from './Pages/MinhasCompras';
import Perfil from './Pages/Perfil';
import Favoritos from './Pages/Favoritos/index'
import Carrinho from './Pages/Carrinho/index.js';
import FinalizarCompra from './Pages/FinalizarCompra'

//Cliente

function Rotas(){
    return(
      <BrowserRouter>
        <Switch>

          <Route path="/" exact={true} component={Home}/>
          <Route path="/Cadastro" component={Cadastro}/>
          <Route path="/Login" component={Login}/>
          <Route path="/EsqueciSenha" component={EsqueciSenha}/>

          <Route path="/Funcionario/Cadastro"  exact={true} component={CadastrarFuncionario}/>
          <Route path="/Funcionario/Cadastro/Login" component={CadastroLogin}/>


          <Route path="/Master" component={Master}/>

          <Route path="/MinhasCompras" component={MinhasCompras}/>
          <Route path="/Favoritos" component={Favoritos}/>
          <Route path="/Perfil" component={Perfil}/>
          <Route path="/Carrinho" component={Carrinho}/>
          <Route path="/FinalizarCompra" component={FinalizarCompra}/>


          <Route path="/Acesso" component={Login} />
          <Route path="/Cadastro/Cliente" component={Cadastro} />



        </Switch>
      </BrowserRouter>
    )
}

export default Rotas;