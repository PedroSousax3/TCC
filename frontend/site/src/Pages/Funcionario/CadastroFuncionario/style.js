import styled from 'styled-components';
export const CaixaInfos = styled.div`
width:100%;
heigth:100%;
align-items:center;
justify-content:center;
display:flex;
padding-top:5%;
.input-icone{
    display:flex;
    flex-direction:row;
}
.centro{
    display:flex;
    flex-direction:column;
    width:80%;
    heigth:100%;
    
}
.botao{
    width:100%;
}
.botao button{
    margin-top:6%;
    width:100%;
    background-color:#D26E4E;
    color:white;
    font-weight:bold;
}

.titulo{
    width:100%;
    text-align:center;
}
.titulo label{
    font-size:1.6rem;
    color:#D26E4E;
    font-weight:bold;
}

@media screen and (max-width: 600px)
{
 
    & {
        padding: 25px 5vw 0px 0vw;
        heigth:80vh;
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
}


}
`;