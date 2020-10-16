import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

import nextGenBookAPI from "../../Service/NextGenBookApi";
const api = new nextGenBookAPI();

export default function Logar(props) {
    //login
    const navegacao = useHistory();
    const [infos, setInfos] = useState(props.location.state);

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
<div className="Menu"></div>
<div className="meio">
  <div className="Caixa-Login">
          <div className="Titulo"><h4>ENTRAR</h4></div>
    <div className="Dados" >
      <div className="username">
        <label > Username ou Email: </label>
          
            <input id="Username" type="text" value={username} onChange={(m) => setUsername(m.target.value)} className="form-control"/>
      </div>    
    
      <div className="senha">
          <label > Senha: </label>
          <input id="Senha" type="password" value={senha} onChange={(m) => setSenha(m.target.value)} className="aaa"/>
      </div>
    </div>
    <div>
      <button type="submit" className="btn btn-primary" onClick={logar}>Logar</button>
    </div>
    <div className="Links">
        <h5><Link to={{pathname:"/EsqueciSenha", state: infos}}>Esqueci a Senha</Link></h5>
        <h5><Link to={{pathname:"Cadastro", state: infos}}>Se cadastrar</Link></h5>
    </div>   
  </div>
</div>
<div className="Menu"></div>

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