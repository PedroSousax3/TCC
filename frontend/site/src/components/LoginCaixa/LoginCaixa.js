import styled from 'styled-components';

export const LoginCaixa = styled.div`
background-color: rgb(152, 240, 187);
width: 50%;
height: 40vh;
display: flex;
text-align: center;
padding-right:7%;
flex-direction: column;
justify-content:center;
border-radius:10px;
box-shadow:10px 10px 5px 0px rgb(0,0,0,0.2);
button:hover {
        background-color: var(--verde-escuro);
        color: white;
    }
button{
        background-color:#16C823;
}
        border-radius:10px;
       label{
                color:#00870D;
                font-weight: bold;
                font-size:20px;
        }
        span{
                color:#00870D;
                font-weight: bold;
                font-size:20px;
                margin-bottom:5%;
        }
        .input-alinhamento{
                display:flex;
                flex-direction:row;
                width:100%;
        }
        .input-alinhamento input{
                width:150%;
        }
        .centro{
                heght:100%;
                width:100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
        }
        .coluna-alinhamento
        {
                display:flex;
                flex-direction:column;
                text-align:right;
                width:100%;
        }
        .coluna-alinhamento .senha{
                margin-top:10%;
                margin-right:5%;
        }

        .inputbotao input{
                margin-top:10%;
        }
        .inputbotao{
                display:flex;
                flex-direction:row;
                width:100%
        }
        .icone{
                margin-top:13%;
                width:1%;
        }
`