import styled from 'styled-components';

export const MasterPage = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    width: 100%;
    min-height: 100vh;

    @media screen and (max-width: 770px)
    {
        margin-bottom: 45px;
        min-height: 100vh;
    }
`;

export const ContainerPage = styled.div`
    background-color: #141414; 
    min-height: 100vh;
    @media screen and (max-width: 770px)
    {
        min-height: calc(100vh - 45px);
    }   
`;