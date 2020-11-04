//Biblioteca
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Paginas:
import MostrarLivro from './Pages/MostrarLivro/index';
import Home from './Pages/Home/index.js';
import Login from './Pages/Login/index.js';
import Perfil from './Pages/Perfil';


//Funcionario 
import CadastrarFuncionario from "./Pages/Funcionario/CadastroFuncionario/CadastrarFuncionario/index.js"

//cliente
import EsqueciSenha from './Pages/Cliente/EsqueciSenha';
import TrocarSenha from './Pages/Cliente/EsqueciSenha/TrocarSenha/index.js';
import Cadastro from './Pages/Cliente/Cadastro/index';
import MinhasCompras from './Pages/Cliente/MinhasCompras/index.js';
import Favoritos from './Pages/Cliente/Favoritos/index'
import Carrinho from './Pages/Cliente/Carrinho/index';
import FinalizarCompra from './Pages/Cliente/FinalizarCompra';
import CadastrarEndereco from './Pages/Cliente/Endereco';

export default function Rotas(){
    return(
      <BrowserRouter>
        <Switch>

          <Route path="/" exact={true} component={Home}/>
          <Route path="/Cadastro" component={Cadastro}/>
          <Route path="/Acesso" component={Login} />
          <Route path="/EsqueciSenha" exact={true} component={EsqueciSenha}/>
          <Route path="/EsqueciSenha/TrocarSenha" component={TrocarSenha}></Route>
          <Route path="/Endereco" component={CadastrarEndereco} />

          <Route path='/MostrarLivro' component={MostrarLivro} />

          <Route path="/Funcionario/Cadastro"  exact={true} component={CadastrarFuncionario}/>

          <Route path="/MinhasCompras" component={MinhasCompras}/>
          <Route path="/Favoritos" component={Favoritos}/>
          <Route path="/Perfil" component={Perfil}/>
          <Route path="/Carrinho" component={Carrinho}/>

        


          <Route path="/FinalizarCompra" component={FinalizarCompra}/>



          <Route path="/Cadastro/Cliente" component={Cadastro} />


        </Switch>
      </BrowserRouter>
    )
}