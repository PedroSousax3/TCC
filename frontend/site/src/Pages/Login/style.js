import styled from 'styled-components'

export const ContainerLogin = styled.div`
    
    justify-content:center;
    padding: 0px 25vw 0px 25vw;
    
    .container-itens{
        text-align: center;
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
