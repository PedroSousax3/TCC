import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home(props){

    const [infos, setInfos] = useState(props.location.state);

    return(
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight:"90vh", minWidth:"100vw"}}>
            <div className="text-center">
                <h1>Olá {props.location.state.nome}</h1>
            </div>
            
        </div> 
    )
}