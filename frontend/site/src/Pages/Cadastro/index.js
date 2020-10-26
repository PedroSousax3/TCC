import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";




import { ContainerCadastro } from './style.js';
import logo from '../../Assets/images/logo/logo-pequena.png';
import {LoginCaixa} from "../../components/LoginCaixa/LoginCaixa";
import nextGenBookAPI from "../../Service/NextGenBookApi";
import { Rodape } from "../../components/Rodape/Rodape";
import { CadastroCaixa } from "../../components/CadastroCaixa/CadastroCaixa";
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import { Height } from "@material-ui/icons";


const api = new nextGenBookAPI();



export default function Cadastro(props){

    const [infos, setInfos] = useState(props.location.state);

    const navegacao = useHistory();

    const [foto, setFoto] = useState();
    const [nome, setNome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [genero, setGenero] = useState('');
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarsenha, setConfirmarSenha] = useState("");
    const [cpf, setCPF] = useState("");
    const [celular, setCelular] = useState("");

    


    const salvarClick = async () => {
        try{
        const resp = await api.cadastrar({
            
                nome: nome,
                nascimento: nascimento,
                genero: genero,
                usuario: usuario,
                senha: senha,
                confirmarsenha: confirmarsenha,
                cpf: cpf,
                celular: celular,
                foto: foto
            
        });
        toast.dark("Cadastro completo");
        handleReset();
        navegacao.push("/Login", resp.data);
        }catch(e){
            toast.error(e.response.data.erro);
        }
    }

    const handleReset = () => {
        setNome("");
        setNascimento(new Date());    
        setGenero('');   
        setUsuario("");
        setSenha("");
        setConfirmarSenha("");
        setCPF("");
        setCelular("");
        setFoto();
    };


    //const inpFile = document.getElementById("inpFile");
    
   // const previewContainer = document.getElementById("imagePreview");
  //  const previewImage = previewContainer.querySelector(".image-preview__image");
 //   const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");


  //  inpFile.addEventListener("change", function() {
   //     const file = this.files[0];


     //   if(file) {
      //      const reader = new FileReader();

      //      previewDefaultText.style.display = "none";
      //      previewImage.style.display = "block";

      //      reader.addEventListener("load", function () {
      //          previewImage.setAttribute("src", this.result);
      //      });
//
       //     reader.readAsDataURL(file);
      //  }
  //  });


            

    return(
        <div id="cadastro">
            <ContainerCadastro>
            <div className="Menu-Top">
                <Link to = "/Master">
                    <img src={logo} alt = "Next Geen Books" className="LogoMenu"/> 
                </Link>
            </div>
            
            <CadastroCaixa>
                <div className="Caixa-Infomacoes">
                    
                    <div className="Informacoes">
                        <label className="Nome">Nome completo:</label>
                        <label className="Nascimento">Nascimento:</label>
                        <label className="Genero">Genero:</label>
                        
                        <label className="Usuario">Usuario:</label>
                        <label className="Senha">Senha:</label>
                        <label className="Confirmar-Senha">Confirmar Senha:</label>
                        <label className="CPF">CPF:</label>
                        <label className="Celular">Celular:</label>
                    </div>

                    <div className="Inputs">
                        <input type="text" className="Nome" onChange={(n) => setNome(n.target.value)} ></input>
                        <input type="date" className="Nascimento" onChange={(n) => setNascimento(n.target.value)}></input>

                        <select name="Genero" 
                        value = {genero}
                        className="Genero" 
                        onChange={e => setGenero(e.target.value)}>
                            <option aria-disabled className="desaparecer">Selecione alguma opção</option>
                            <option value="Masculino" >Masculino</option>
                            <option value="Feminuno" >Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                        
                        <input type="text" className="Usuario" onChange={(n) => setUsuario(n.target.value)}></input>
                        <input type="password" className="Senha" onChange={(n) => setSenha(n.target.value)}></input>
                        <input type="password" className="Confirmar-Senha" onChange={(n) => setConfirmarSenha(n.target.value)}></input>
                        <input type="text" className="CPF" onChange={(n) => setCPF(n.target.value)}></input>
                        <input type="text" className="Celular" onChange={(n) => setCelular(n.target.value)}></input>
                        
                    </div>
                        </div>   


                    <div className="Caixa-Imagem">
                        <div>
                            <label for='input-file'>
                                <span>Selecionar uma imagem de perfil</span>
                            </label>
                                <input type="file" id="img-input" name="image"
                                    onChange={e => setFoto(e.target.files[0])}
                                ></input>
                                <div class="image-preview" id="img-container" 
                                     style={{width:"98%", minHeight:"100%", border:"2%", marginTop:"10%",
                                             display:"flex", alignItems:"center", justifyContent:"center", fontWeight:"bold", color:"black"}}>

                                    <img src="" id="preview"></img>
                                    <span class="image-preview__default-text">Preview da Foto</span>
                                </div>
                                
                                
                        </div>
                        <div className="button1">
                            <button type="button" class="btn btn-success" onClick={salvarClick} >Confirmar cadastro</button>
                        </div>
                    </div>

                    
            </CadastroCaixa>
            </ContainerCadastro>
            <Rodape/>
        </div>
    );
}