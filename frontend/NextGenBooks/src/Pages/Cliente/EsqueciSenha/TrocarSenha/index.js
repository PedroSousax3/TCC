import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";


import 'react-toastify/dist/ReactToastify.css';
import { CaixaEsqueciSenha } from '../style';
import Master from "../../../Master/index";
import { toast, ToastContainer } from "react-toastify";

import NextGenBookApi from '../../../../Service/NextGenBookApi';
const api = new NextGenBookApi();

export default function TrocarSenha(props) {
  const navegacao = useHistory();
  const [senha, setSenha] = useState("");
  const [confirmarsenha, setConfirmarSenha] = useState("")

  const salvarSenha = async () => {
    try {
      let request = {
        senha
      }
      if (senha === confirmarsenha) {
        let idLogin = props.location.state.idLogin;
        const response = await api.trocarSenha(request, idLogin);
        toast.dark("Senha trocada")
        navegacao.push("/acesso");
      } else {
        toast.error("confirmação de senha incorreta")
      }

    } catch (e) {
      toast.error(e.response.data.erro);
    }
  }

  function mostrar() {
    let item1 = document.getElementById("formGroupExampleInput1");
    let item2 = document.getElementById("formGroupExampleInput2");
    if (item1.type == "password") {
      item1.type = "text";
      item2.type = "text";
    } else {
      item1.type = "password";
      item2.type = "password";
    }

    var botao = document.querySelector(".btn.btn-sm");

    if (botao.classList.contains("fa-eye")) {
      botao.classList.remove("fa-eye");
      botao.classList.add("fa-eye-slash");
    } else {
      botao.classList.remove("fa-eye-slash");
      botao.classList.add("fa-eye");
    }
  }



  return (
    <Master>
      <CaixaEsqueciSenha>
        <div>
          <input type="password" id="formGroupExampleInput1" className="form-control" placeholder="SENHA NOVA"
            style={{ position: "relative" }} onChange={(e) => setSenha(e.target.value)} />
          <i className="icone btn btn-sm fas fa-eye" onClick={mostrar}></i>
        </div>

        <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="CONFIRMAR SENHA NOVA"
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        <button type="button" className="btn btn-success"
          onClick={salvarSenha}>
          Trocar senha
              </button>

      </CaixaEsqueciSenha>
      <ToastContainer />
    </Master>
  );
}





