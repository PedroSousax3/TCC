import styled from 'styled-components';
export const LoginCaixaFuncionario = styled.div`
background-color: rgb(152, 240, 187);
width: 70vw;
height: 50vh;
display: flex;
text-align: center;
flex-direction: column;
justify-content:center;
padding-left:20px;
padding-right:40px;
padding-bottom:5%;
border-radius:10px;
box-shadow:10px 10px 5px 0px rgb(0,0,0,0.2);

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
    width:%;
         color:#00870D;
        font-weight: bold;
        font-size:20px;
}
.inputs{
    display:flex;
    flex-direction:column;
    width:60%;

}
.textos span{
    margin-top:4%;
    margin-bottom:5%;
    margin-right: ;
    width:%;
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
    height:100%;
    margin-top:2%;
    width:25%;
    margin-left: 1%;
    cursor:pointer;
    min-width:80px;
}
.botao-next{
    width:91%;
    display:flex;
    justify-content:flex-end;
    height:10%;
}
.botao-next button{
    background-color:rgb(210,110,78);
    border:none;
    color:white;
    border-radius:6px;
    height:100%;
    width:50%;
    cursor:pointer;

}

`