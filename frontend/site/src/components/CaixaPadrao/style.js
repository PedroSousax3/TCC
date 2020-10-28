import styled from 'styled-components';
export const CaixaPadrao = styled.div`
background-color: rgb(152, 240, 187);
width: 60%;
height: 65vh;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
border-radius:10px;
box-shadow:10px 10px 5px 0px rgb(0,0,0,0.2);
text-align:left;
font-weight:bold;
font-size:1.3rem;

@media screen and (max-width: 600px)
{
 
    & {
        padding: 25px 5vw 0px 0vw;
        heigth:80vh;
        width:100%;
        background-color:white;
        box-shadow:none;
      
    }
}

`