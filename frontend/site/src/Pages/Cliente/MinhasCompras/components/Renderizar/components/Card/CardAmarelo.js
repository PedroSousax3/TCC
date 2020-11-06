import React from "react";


export default function CardAmarelo(props){
    return(
        <div ClassName="card text-white bg-primary mb-3" style={{minWidth: "70%",marginRight:"3%",minHeight:"26vh"}}>
        <div ClassName="card-header" key={props.Id}>{props.Titulo}</div>
        <div style={{display:"flex",flexDirection:"row"}}>
        <img src="..." alt="..." className="img-thumbnail" style={{width:"35%"}} />
        <div ClassName="card-body">
          <h5 ClassName="card-title">{props.Valor}</h5>
          <p ClassName="card-text">{props.Status}</p>
          <p ClassName="card-text">{props.Quantidade}</p>
        </div>
        </div>
        </div>
          )
}