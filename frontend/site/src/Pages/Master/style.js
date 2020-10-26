import styled from 'styled-components';

export const MasterPage = styled.div`
    box-sizing: border-box;
    max-width: 100%;

    @media screen and (max-width: 770px)
    {
        margin-bottom: 60px;
    }
`;

export const ContainerPage = styled.div`
    min-height: calc(100vh - 60px);
    @media screen and (max-width: 770px)
    {
        min-height: calc(100vh - 120px);
    }   
`;