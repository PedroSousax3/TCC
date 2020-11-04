import React from "react";




export default function CardVermelho(props){
    return(
        <div className="card text-white bg-danger mb-3" style={{minWidth: "70%",marginRight:"3%",minHeight:"26vh"}}>
        <div className="card-header" key={props.Id}>{props.Titulo}</div>
        <div style={{display:"flex",flexDirection:"row"}}>
        <img src="..." alt="..." className="img-thumbnail" style={{width:"35%"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.Valor}</h5>
          <p className="card-text">{props.Status}</p>
          <p className="card-text">{props.Quantidade}</p>
        </div>
        </div>
        </div>
          )
}