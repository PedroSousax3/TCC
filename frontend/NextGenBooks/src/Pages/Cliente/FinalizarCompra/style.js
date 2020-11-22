import styled from 'styled-components';
export const CaixaFinalizarCompra = styled.div`
    background-color: #fff;
    width: 60vw;
    min-height:50vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content:center;
    padding-left:20px;
    padding-right:40px;
    padding-bottom:1%;
    font-weight:bold;
    border:none;
    color:green;
    font-family: Arial,Helvetica,"Nimbus Sans L",sans-serif;
    border-radius:10px;
    box-shadow:10px 10px 5px 0px rgb(0,0,0,0.2);
.table{
    width:100%;
    color:#999;
}
.form-group{
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-around;
}
.form-group .col-sm-10 input{
    width:116%;
    margin-left:-4%;
}
.form-group select{
    width:50%;
}
.botao{
    width:100%;
    justify-content:flex-end;
}
.botao button{
    margin-top:10%;
    width:35%;
    background-color:green;
    color:white;
    font-weight:bold;
}
.form-row{
    width:93%;
    margin-left:5%;
    margin-top:5%;
}
`