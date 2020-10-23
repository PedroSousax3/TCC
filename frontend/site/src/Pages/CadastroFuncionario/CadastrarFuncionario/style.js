import styled from 'styled-components';
export const CaixaFuncionario = styled.div`
background-color: rgb(152, 240, 187);
width: 80vw;
height: 70vh;
display: flex;
text-align: center;
flex-direction: column;
justify-content:center;
padding-left:20px;
padding-right:40px;
padding-bottom:1%;
border:none;
border-radius:10px;
box-shadow:10px 10px 5px 0px rgb(0,0,0,0.2);
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
    height: 90%;
    width:100%
}
.textos{
    display:flex;
    flex-direction:column;
    text-align: right;
    height:100%;
}
.inputs{
    display:flex;
    flex-direction:column;
    width:60%;
    margin-top:1%;
    height:100%;
}
.textos span{
    margin-top:5%;
    margin-bottom:3%;
    margin-right: ;
    height:100%;
}
.inputs input{
    margin-top:2.5%;
    margin-bottom:3%;
    margin-left: 3%;
    width:100%;
    height:100%;
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
    height:100%;
    width:20%;
    cursor:pointer;
}

`