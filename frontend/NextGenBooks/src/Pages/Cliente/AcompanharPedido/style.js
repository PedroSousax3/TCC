import styled from 'styled-components'

export const Container = styled.div`
    
    justify-content:center;
    flex:1;
    min-height:80vh;
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

export const CaixaPadrao = styled.div`
    background-color: white;
    width: 60%;
    height: 65vh;
    display: flex;
    flex-direction: column;

    justify-content:center;
    align-items:center;
    `