import styled from 'styled-components'

export const Home = styled.div` 
`;

export const ContainerPesquisa = styled.div`
    background-color: rgb(210, 110, 78);
    width: 100vw;
    display: flex;
    align-items: center;
    z-index: 250;
    justify-content: space-between;
    position: fixed;
    padding: 5px 25px;
`;

export const ContainerPreview = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
        
    padding: 60px 10px 10px;
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
    &:hover {
        padding: 5px;
        outline: none;
        text-decoration: none;
        opacity: 0.7;
        color: black;
    }
`; 