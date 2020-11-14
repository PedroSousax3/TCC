import styled from 'styled-components'

export const ContainerMinhasCompras = styled.div`
width: auto;

padding: 10px;

display: flex;
flex-direction: column;

& > .card {
    width: 100%;
    margin-bottom: 15px;
}

& > .card > .card-header {
    font-weight: 600;
    font-size: 18px;
}

& > .card > .container {
    padding: 10px 5px;
    background-color: var(--verde-claro);
}

& > .card > .container > .card-body{
    padding: 0px;
}

& > .card > .container > d-block > .w-100{
    float: left;
    max-height: 50px;
    width: 160px;
    margin-right: 10px;
}

& h6, & p {
    margin-bottom: 3px;
}

@media screen and (max-width: 770px)
{
    margin-right: 0px;
}

@media screen and (max-width: 400px)
{
    & > .card > .container > .img-thumbnail{
        width: 100%;
    }
}
`;

export const Pesquisa = styled.div`

    position: absolute;
    right: 5px;
    top: 55px;
    min-height: auto;
    width: auto;
    padding: 5px;
    color: black;
    font-weight: 600;
    font-size: 18px;
    
    @media screen and (max-width: 900px)
    {
        top : 90px;
        right: 0;
        width: 100vw;
        align-items : center;
        display: flex;
        justify-content: space-between;
    }
`;
