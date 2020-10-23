import styled from 'styled-components'

export const ContainerLogin = styled.div`
    
    justify-content:center;
    flex:1;
    height:80vh;
    align-items:center;
    display:flex;
    justify-content:center;
    .inputbotao{
        display:flex;
        flex-direction:row;
        justify-content:space-between
    }
    .botao{
        justify-content: flex-end;
        display:flex;
        width:100%;
    }
    button{
        width:31.3%;
        margin-right:0.5%;
        margin-left:1%;
        color:white;
        font-weight: bold;
    }
    .Links{
        justify-content: flex-end;
        display:flex;
        width:100%;
        flex-direction:row;
    }
    .link{
        width:31.3%;
        margin-right:0.5%;
        margin-left:1%;
    }
    input{
        width:65%;
        margin-top:3%;
        margin-right:10%;
    }
    label{
        margin-top:5%;
        margin-bottom: 1%;
        font-weight: bold;
        color:#00870D;
    }
    .usuario{
        margin-left:9%;
    }
    .senha{
        margin-left:22%;
    }
    .container-itens{
        text-align: center;
        justify-content:center;

    }
  
    @media screen and (max-width: 600px)
    {
        & {
            padding: 0px 10vw 0px 10vw;
        }
    }

    @media screen and (max-width: 330px)
    {
        & {
            padding: 0px 5vw 0px 5vw;
        }
    }
`
