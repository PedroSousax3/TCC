import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

import nextGenBookAPI from "../../Service/NextGenBookApi";
const api = new nextGenBookAPI();

export default function Logar() {
    //login
    const navegacao = useHistory();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const logar = async (e) => {
        e.preventDefault();
        try {
          const m = {
            username: username,
            email: email,
            senha:senha
          };

          const a = await api.login(m);
          
          if(a.data.clienteFuncionario == "Cliente"){
            navegacao.push("/Home",a.data);
          }else{
            navegacao.push("/Login", a.data);
          }
        } catch (e) {
          toast.error("Algum dado pode estar incorreto, verifique por favor.");
        }
     }
      // final do login
    

      return (
        <div>
          <form>
          <div>            

<div className="Caixa-Login">
          <div className="Titulo">ENTRAR</div>
    <div className="form-group row" style={{minWidth:"500px"}}>
        <label className="col-sm-2 col-form-label"> Username ou Email: </label>
      <div className="col-sm-8">
        <input id="Username" type="text" value={username} onChange={(m) => setUsername(m.target.value)} className="form-control"/>
      </div>
    </div>
      <div className="form-group row" style={{minWidth:"500px"}}>
          <label className="col-sm-2 col-form-label"> Senha: </label>
        <div className="col-sm-8">
          <input id="Senha" type="password" value={senha} onChange={(m) => setSenha(m.target.value)} className="form-control"/>
        </div>
    </div>
    <div>
      <button type="submit" className="btn btn-primary" onClick={logar}>Logar</button>
    </div>
</div>
</div>
          </form>
          <ToastContainer />
        </div>
      );
}



 
//function Cadastrar(){
//  const [usuario, setUsuario] = useState("");
//  const [email, setEmail] = useState("");
//  const [senha, setSenha] = useState("");
//
//  const salvar = async () => {
//    try {
//      await api.cadastrar({
//        usuario: usuario,
//        email : email,
//        senha : senha
//      });
//      
  //    toast.dark("🚀 Cadastrado Com Sucesso, já pode realizar LOGIN");
   // }
   // catch (e) {
    //  if (e.response.data.erro)
     //   toast.info("🌧️ " + e.response.data.erro);
     // else 
     // toast.error("🌧️ Ocorreu um erro. Tente novamente.");
   // }
//
 // };

  
//}
//return(
//  <div className="teste">//
//<div className="Caixa-Cadastro">
//    <div className="Titulo-Cadastrar">CADASTRAR</div>
//
//  <div>
  //  <label className="teste" >Username</label>
//    <div>
//      <input id="Username"
//             type="text"
//             value={usuario}
//             />
//    </div>
 // </div>
//</div>  
//</div>
//);
//}