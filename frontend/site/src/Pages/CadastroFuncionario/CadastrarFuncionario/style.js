import styled from 'styled-components';
export const CaixaFuncionario = styled.div`
background-color: rgb(152, 240, 187);
width: 80%;
height: 80vh;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
border-radius:10px;
box-shadow:10px 10px 5px 0px rgb(0,0,0,0.2);
text-align:left;
font-weight:bold;
font-size:1rem;
label{
    margin-bottom:1%;
}
.inputs{
    height:6%;
}

.botao{
    width:100%;
}
.botao button{
    margin-top:5%;
    width:100%;
    background-color:#D26E4E;
    color:white;
    font-weight:bold;
}
form{
    color:#00870D;
    font-weight:bold;
    font-size:1.0rem;
    width:80%;
    margin-top:16%;
}


@media screen and (max-width: 600px)
{
 
    & {
        padding: 200px 5vw 0px 0vw;
        heigth:70vh;
        width:100%;
        background-color:white;
        box-shadow:none;
      
    }
    & > form > input{
        font-size:10px;
        margin:0px;
    }
   & >.botao > button{
        width:100%;
    }
    & > .botao {
        display:flex;
        width:100%;
    }
    & > label{
        font-size:0.6rem;
        margin-top:10px;
    }
    & >.inputs{
        height:4%;
    }
  
}



}

`