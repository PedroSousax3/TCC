import styled from 'styled-components'

export const Home = styled.div` 
`;

export const ContainerPesquisa = styled.div`
    /*background-color: rgb(210, 110, 78);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 250;
    position: fixed;
    padding: 5px 25px;*/
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0px 15px 15px 15px;
    z-index: 1;
    background-color : #141414;

    &.pesquisa > div.genero > select, &.pesquisa > div.nome > input[type = "text"]{
        height: 30px;
        color: white;
        font-weight: 600;
        width : 100%;
        font-size: 16px;
        background-color: #414141;
        border: 1px solid white;
        outline: none;
    }

    &.pesquisa > div.genero > select {
        width: 200px;
    }


    &.pesquisa > div.genero > select > option{
        color: white;
    }

    &.pesquisa > div.nome > input[type = "text"]{
        padding: 2px 5px;
        width: 400px;
    }

    @media screen and (max-width: 690px){
        &.pesquisa {
            display: flex;
            flex-direction: column-reverse;
        }

        
        &.pesquisa > div.nome > input[type = "text"]{
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 430px){   
        &.pesquisa > div.nome, &.pesquisa > div.nome > input[type = "text"]{
            width: 100%;
        }
        &.pesquisa > div.genero, &.pesquisa > div.genero > select {
            width: 100%;
        }    
    }
`;


export const ContainerPreview = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
        
    padding: 70px 10px 10px;
    flex-grow: 1;

    max-width: 100vw;

    & > * {
        padding: 5px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 240px;

    height: auto;
    margin: 5px;

    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    background-color: white;
    cursor: pointer;

    outline: none;
    text-decoration: none;

    transition: .4s linear;

    & *:hover {
        outline: none;
    }

    & > .card-titulo {
        flex-wrap: wrap;
        text-align: center;
    }

    .card-image {
        margin-bottom: auto;
    }

    .card-image  {
        height: "300px";
        width: "170px";
    }

    .card-livro:hover + .card-image  {
        height: "350px";
        width: "120px";
    }

    .card-focus {
        transition: linear 0.3s;
        background-color: black;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.28;
        top: 0;
    }

    .card-focus:hover {
        opacity: 0;
    }
`; 