import styled from 'styled-components';

export const LoginCaixa = styled.div`
        width: 40vw;
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;

        label, a {
                color: white;
                font-weight: 600;
        }

        a {
                font-size : 18px;
        }

.input-icone{
        display:flex;
        flex-direction:row;
}
.centro{
        display:flex;
        flex-direction:column;
        width:100%;
}
.botao{
        width:100%;
}
.botao button{
        margin-top:10%;
        width:100%;
        background-color:#D26E4E;
        color:white;
        font-weight:bold;
}

.botao button:hover{
        background-color: #a34729;
}

.titulo{
        width:100%;
        text-align:center;
}
.titulo label{
        font-size:1.6rem;
        color: white;
        font-weight:bold;
}
.Links{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        font-size:0.9rem;
}
.Links link{
        text-align:center;
        width:100%;
}

@media screen and (max-width: 600px)
{
 
    & {
        padding: 0;
        width:100%;
        box-shadow:none;      
    }
    & > form > input{
        font-size:10px;
        margin:0px;
        width: 100%;
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
}`