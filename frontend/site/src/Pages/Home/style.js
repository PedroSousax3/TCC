import styled from 'styled-components'

export const Home = styled.div` 
`;

export const ContainerPesquisa = styled.div`
    background-color: rgb(210, 110, 78);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    padding: 5px 25px;
`;

export const ContainerPreview = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
        
    padding: 60px 10px 10px;
    height: 1000px;
    background-color: black;
    flex-grow: 1;

    max-width: 100vw;

    & > * {
        padding: 5px;
    }
`;