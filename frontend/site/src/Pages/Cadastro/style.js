import styled from 'styled-components'

export const ContainerCadastro = styled.div`
    justify-content:center;
    align-items:center;
    display:flex;
    span{
        
        width:10vw;
        height:5vh;
    }
    
    .Caixa-Infomacoes{
       
        width:30vw;
        height:70vh;
        flex-direction: row;
        display: flex;
        
    }

    label{
        color:black;
        
        
    }

    select{
        height:5vh;
        border-color: black;
    }

    .Informacoes{
        
        width:100vw;
        height:70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size:20px;
        
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
        flex-direction:column;
       
        display:flex;
        width:55vw;
        height:63vh;
        margin-left:50px;
        margin-top:50px;
    }

    //input[type='file'] {
     //   display: none
    //}

    .Caixa-Botao{
        
        width:10vw;
        height:10vh;
    }
    
    .button1{
        margin-left:100px;
        margin-top:100px;
        width:100%;
        height:100%;
        align-items:flex-end;
        display:flex;
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
