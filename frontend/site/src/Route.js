import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login/index.js';
import Home  from './Pages/Home';
import Cadastro from './Pages/Cadastro';
import EsqueciSenha from './Pages/EsqueciSenha';

import CadastrarLogin from './Pages/CadastroFuncionario/CadastrarLogin'

import Master from './Pages/Master/index';

import MinhasCompras from './Pages/MinhasCompras';
import Perfil from './Pages/Perfil';
import Favoritos  from './Pages/Favoritos';
import Carrinho from './Pages/Carrinho';


function Rotas(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Cadastro" component={Cadastro}/>
          <Route path="/EsqueciSenha" component={EsqueciSenha}/>


          <Route path="/Funcionario/Cadastro/Login" component={CadastrarLogin}/>


          <Route path="/Master" component={Master}/>

          <Route path="/MinhasCompras" component={MinhasCompras}/>
          <Route path="/Favoritos" component={Favoritos}/>
          <Route path="/Perfil" component={Perfil}/>
          <Route path="/Carrinho" component={Carrinho}/>


        </Switch>
      </BrowserRouter>
    )
}

export default Rotas;