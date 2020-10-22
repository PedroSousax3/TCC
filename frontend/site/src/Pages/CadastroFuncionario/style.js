import styled from 'styled-components';
export const CaixaFuncionario = styled.div`

    background-color: rgb(152, 240, 187);
    width: 80vw;
    height: 50vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content:center;
    padding-left:20px;
    padding-right:40px;
    padding-bottom:5%;
    border:3px 
    solid #00870D;
    border-radius:10px;

    span{
            color:#00870D;
            font-weight: bold;
            font-size:20px;
    }

    .agrupamento{
        display:flex;
        flex-direction:row;
        justify-content: center;
        align-items: center;
        justify-items: center;
        height: 100%;
        width:100%
    }

    .textos{
        display:flex;
        flex-direction:column;
        text-align: right;
    }

    .inputs{
        display:flex;
        flex-direction:column;
        width:60%;

    }
    .textos span{
        margin-top:7%;
        margin-bottom:7%;
    }

    .inputs input{
        margin-top:2%;
        margin-bottom:2%;
        margin-left: 3%;
        width:100%;
    }

    .input-botao {
        flex-direction: row;
        display: flex;
        justify-content: space-around;
    }

    .input-botao input{
        width:80%;
    }

    .input-botao button{
        background-color:rgb(64,94,198);
        border:none;
        color:white;
        border-radius:6px;
        height:30px;
        margin-top:2%;
        width:25%;
        margin-left: 1%;
        cursor:pointer;
    }

    .botao-next{
        width:91%;
        display:flex;
        justify-content:flex-end;
    }

    .botao-next button{
        background-color:rgb(210,110,78);
        border:none;
        color:white;
        border-radius:6px;
        height:40px;
        width:15%;
        cursor:pointer;
    }
`;