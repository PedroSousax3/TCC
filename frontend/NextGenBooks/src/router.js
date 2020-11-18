//Biblioteca
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Paginas:
import MostrarLivro from './Pages/MostrarLivro/index';
import HomePage from './Pages/Home/index.js';
import Login from './Pages/Login/index.js';
import EsqueciSenha from './Pages/Cliente/EsqueciSenha';
import TrocarSenha from './Pages/Cliente/EsqueciSenha/TrocarSenha/index.js';
import Cadastro from './Pages/Cliente/Cadastro/index';
import NotFound from './Pages/NotFound/index.js';

//Funcionario 
import CadastrarFuncionario from "./Pages/Funcionario/CadastroFuncionario/CadastrarFuncionario/index.js"

//cliente
import Perfil from './Pages/Perfil/index.js';
import MinhasCompras from './Pages/Cliente/MinhasCompras/index.js';
import Favoritos from './Pages/Cliente/Favoritos/index'
import Carrinho from './Pages/Cliente/Carrinho/index';
import FinalizarCompra from './Pages/Cliente/FinalizarCompra';
import CadastrarEndereco from './Pages/Cliente/Endereco';
import AlterarCliente from './Pages/Cliente/AlterarCliente/index.js';
import VendaPorDia from './Pages/Relatorios/VendaPorDia/index.js';

//Relatorios
import VendaPorMes from './Pages/Relatorios/VendaPorMes/index.js';
import TopClientes from './Pages/Relatorios/TopClientes/index.js';
import MenuRelatorios from './Pages/Relatorios/index.js';
import TopVenda from './Pages/Relatorios/TopVendas/index.js';
import LivroMaisVendadido from './Pages/Relatorios/LivroMaisvendidos/index.js'
import LivroVendaRelatorio from './Pages/Relatorios/VendaPorDia/LivrosDaCompra/index.js';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/Cadastro" component={Cadastro} />
        <Route path="/Alterar-Dados" component={AlterarCliente} />
        <Route path="/Acesso" component={Login} />
        <Route path="/EsqueciSenha" exact={true} component={EsqueciSenha} />
        <Route path="/EsqueciSenha/TrocarSenha" component={TrocarSenha} />
        <Route path="/Perfil" component={Perfil} />
        <Route path="/Funcionario/Cadastro" exact={true} component={CadastrarFuncionario} />
        <Route path="/Endereco" component={CadastrarEndereco} />
        <Route path='/MostrarLivro' component={MostrarLivro} />
        <Route path="/Favoritos" component={Favoritos} />
        <Route path="/Carrinho" component={Carrinho} />
        <Route path="/MinhasCompras" component={MinhasCompras} />
        <Route path="/FinalizarCompra" component={FinalizarCompra} />

        <Route path="/Relatorios" component={MenuRelatorios} />
        <Route path="/Relatorio/VendaDia" component={VendaPorDia} />
        <Route path="/Relatorio/LivroVenda" component={LivroVendaRelatorio} />
        <Route path="/Relatorio/VendaMes" component={VendaPorMes} />
        <Route path="/Relatorio/TopClientes" component={TopClientes} />
        <Route path="/Relatorio/TopVenda" component={TopVenda} />
        <Route path="/Relatorio/LivroMaisVendido" component={LivroMaisVendadido} />
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}