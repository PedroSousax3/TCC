import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Paginas:
//Funcionario
import Home from './pages/Home/index.js';
import Login from './pages/Login/index.js';
import Cadastro from './pages/Cadastro/index';


import CadastroLogin from './pages/CadastroFuncionario/CadastrarLogin' 

import CadastrarFuncionario from "./pages/CadastroFuncionario/CadastrarFuncionario/index.js"

<<<<<<< HEAD
import Master from './pages/Master/index';
import EsqueciSenha from './pages/EsqueciSenha';
import MinhasCompras from './pages/MinhasCompras';
import Perfil from './pages/Perfil';
import Favoritos from './pages/Favoritos/index'
import Carrinho from './pages/Carrinho/index.js';
import FinalizarCompra from './pages/FinalizarCompra'
=======

//Cliente

import Master from './Pages/Master/index';
import EsqueciSenha from './Pages/EsqueciSenha';
import MinhasCompras from './Pages/MinhasCompras';
import Perfil from './Pages/Perfil';
import Favoritos from './Pages/Favoritos/index'
import Carrinho from './Pages/Carrinho/index.js';

import FinalizarCompra from './Pages/FinalizarCompra/index.js';

import FinalizarCompra from './Pages/FinalizarCompra'
>>>>>>> 89b946d853c27cefff60902538d1b677e9016c1d


//Cliente

function Rotas(){
    return(
      <BrowserRouter>
        <Switch>

          <Route path="/" exact={true} component={Home}/>
          <Route path="/Cadastro" component={Cadastro}/>
          <Route path="/Login" component={Login}/>
          <Route path="/EsqueciSenha" component={EsqueciSenha} />

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