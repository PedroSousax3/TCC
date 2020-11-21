import styled from 'styled-components'

export const Container = styled.div`
    flex:1;
    min-height:100vh;
    min-width:80vw;
    align-items:center;
    display:flex;
    flex-direction:column;
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
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    min-width:60vw;
    min-height:100vh;
    padding-top:6px;
 
    
    .titulo{
        font-size: 16px;
        color: #999;
        margin-bottom: 2px;
        text-align: left;
    }
    .corpo{
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        vertical-align: baseline;
        font-size: 14px;
        color: #999;
        margin-top: 0;
        text-align: left;
        display: block;
        font-family: Arial,Helvetica,"Nimbus Sans L",sans-serif;
        font-size: 13px;
        line-height: 20px;
    }
    .card{
        padding: 32px 20px;
        margin-top: 17px;
        padding: 0;
        border: 0;
        outline: 0;
        vertical-align: baseline;
        display: block;
        font-family: Arial,Helvetica,"Nimbus Sans L",sans-serif;
        font-size: 13px;
        line-height: 20px;
        background-color: #fff;
        color: #333;
        width:100%;
    }
    `