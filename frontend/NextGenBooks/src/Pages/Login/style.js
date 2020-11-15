import styled from 'styled-components'

export const FundoCarregamento = styled.div`
  position : fixed;
  top : 0;
  bottom :0;
  height : 100vh;
  width : 100vw;
  background-color : rgba(0, 0, 0, 0.5);
  display : none;
  justify-content : center;
  align-items : center;
  z-index:1000;
`

export const ContainerLogin = styled.div`
    justify-content:center;
    flex:1;
    height:80vh;
    align-items:center;
    display:flex;
    justify-content:center;

    
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
