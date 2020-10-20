import styled from 'styled-components'

export const ContainerCadastro = styled.div`
    
    span{
        color: aliceblue;
        width:10vw;
        height:5vh;
    }
    
    .Caixa-Infomacoes{
       
        width:30vw;
        height:70vh;
        flex-direction: row;
        display: flex;
        border-color: green;
    }

    label{
        color:black;
        cursor: pointer;
        
    }

    select{
        height:5vh;
        border-color: black;
    }

    .Informacoes{
        
        width:15vw;
        height:70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size:20px;
        border-color: green;
    }
    .Inputs{
        
        width:15vw;
        height:70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    .Nome, .Nascimento, .Genero, .Email, .Usuario, .Senha, .Confirmar-Senha, .CPF, .Celular {
        margin:4px;
        border-radius:7px;
        
        
    }


    .Caixa-Imagem{
        background-color:gray;
        width:10vw;
        height:20vh;
        margin-left:50px;
        margin-top:50px;
    }

    //input[type='file'] {
     //   display: none
    //}
  
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
