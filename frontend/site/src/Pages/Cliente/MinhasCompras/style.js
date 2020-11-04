import styled from 'styled-components'

export const ContainerMinhasCompras = styled.div`
    
    justify-content:Flex-start;
    flex:1;
    height:80vh;
    align-items:center;
    flex-direction: column;
    display:flex;
    justify-content:center;
    .titulo{
        width:60%;
    }
    .titulo label{
        text-align:left;
    }
    .botoes{
        width:60%;
        justify-content:Flex-start;
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

export const CaixaMinhasCompras = styled.div`
background-color: rgb(152, 240, 187);
width: 60%;
height: 65vh;
display: flex;
flex-direction: column;

justify-content:center;
align-items:center;
`