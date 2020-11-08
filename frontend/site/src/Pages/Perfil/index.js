import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast, useToast } from "react-toastify"


import { CaixaPerfil } from './style';
import Master from '../Master/index.js';

import nextGenBookAPI from "../../Service/NextGenBookApi"


const api = new nextGenBookAPI();


export default function EsqueciSenha(props){

    
    const [infos, setInfos] = useState(props.location.state);
    const [informacoes, setInformacoes] = useState([]);
    

   
    
    const consultarPerfil = async () => {
    
        const response = await api.mostrarPerfil();
        setInformacoes(response);
        
    }

  

    useEffect(() => {
        consultarPerfil();
      }, [])

    return(
       <Master>
           <div>
                   <div style={{justifyContent:"center",alignItems:"center",paddingTop:"3%",display:"flex",flexDirection:"column"}}>
                        <div style={{width:"80%",display:"flex",justifyContent:"flex-start",fontSize:"25px",fontWeight:"bold"}}>
                                </div>
                        <CaixaPerfil>
                            <div style={{width:"100%", height:"50vh", backgroundColor:"#98F0BB", display:"flex", borderRadius:"10px"}}>
                                <div className="foto" style={{width:"20%", height:"35vh", alignItems:"center", justifyContent:"center", display:"flex"}}>
                                    <div style={{width:"80%", height:"30vh", backgroundColor:"white", borderRadius:"10px"}}>
                                        
                                    </div>
                                </div>
                                <div className="informacoes" style={{width:"60%", height:"35vh" }} >
                                    <div style={{marginTop:"10px"}}>NOME:{informacoes.nome} </div>
                                    <div>IDADE: {informacoes.idade} </div>
                                    <div>GENERO: {informacoes.genero} </div>
                                    
                                </div>
                                
                                <div className="botoes" style={{width:"20%", height:"35vh"}}>
                                    <div style={{marginTop:"10px", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>

                                        

                                        <button className="btn btn-success" style={{marginTop:"5px"}}>ALTERAR DADOS DA CONTA</button>
                                        <button className="btn btn-success" style={{marginTop:"7px"}}>IR PARA SEUS FAVORITOS</button>
                                        <button className="btn btn-success" style={{marginTop:"7px"}}>CADASTRAR ENDEREÇO</button>

                                    </div>
                                </div>
                            </div>
                            <div style={{width:"100%", height:"50vh",  borderRadius:"10px"}}></div>
                        </CaixaPerfil>
                        <ToastContainer />
                    </div>
                </div>
       </Master>
    );
}