import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Paginas:
//Funcionario
import Home from './pages/Home/index.js';
import Login from './pages/Login/index.js';
import Cadastro from './pages/Cadastro/index';


import CadastroLogin from './pages/CadastroFuncionario/CadastrarLogin' 

<<<<<<< HEAD
import CadastrarFuncionario from "./pages/CadastroFuncionario/CadastrarFuncionario"
=======
import CadastrarFuncionario from "./Pages/CadastroFuncionario/CadastrarFuncionario"

import Master from './Pages/Master/index';
import EsqueciSenha from './Pages/EsqueciSenha';
import MinhasCompras from './Pages/MinhasCompras';
import Perfil from './Pages/Perfil';
import Favoritos from './Pages/Favoritos/index'
import Carrinho from './Pages/Carrinho/index.js';
import FinalizarCompra from './Pages/FinalizarCompra'
>>>>>>> 955d095b9680d1b27a70e56390c17086e003b4a7

//Cliente
import Master from './pages/Master/index';
import EsqueciSenha from './pages/EsqueciSenha';
import MinhasCompras from './pages/MinhasCompras';
import Perfil from './pages/Perfil';
import Favoritos from './pages/Favoritos/index'
import Carrinho from './pages/Carrinho/index.js';


function Rotas(){
    return(
      <BrowserRouter>
        <Switch>

          <Route path="/" exact={true} component={Home}/>
          <Route path="/Cadastro" component={Cadastro}/>
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