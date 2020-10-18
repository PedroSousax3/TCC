import styled from 'styled-components'

export const ContainerLogin = styled.div`
    
    justify-content:center;
    padding: 12% 25vw 0px 25vw;
    height:92vh;
    aling-items:center;
    display:flex;
    justify-items:center;
    .inputbotao{
        display:flex;
        flex-direction:row;
        justify-content:space-between
    }
    .botao{
        justify-content:space-around
    }
    button{
        width:100px;
    }
    input{
        width:65%;
        margin-top:12px;
        margin-rigth:10%;
    }
    label{
        margin-top:12px;
        
    }
    .usuario{
        margin-left:10%;
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
