import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './style.css'

export default function Cadastro(props){

    const [infos, setInfos] = useState(props.location.state);

    return(
        <div>
            <form>
                
            </form>
            <ToastContainer />
        </div>
    );
}