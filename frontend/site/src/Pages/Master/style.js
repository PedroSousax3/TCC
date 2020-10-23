import styled from 'styled-components';

export const MasterPage = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    max-width: 100%;
`;

export const ContainerPage = styled.div`
    min-height: calc(100vh - 120px);
    //display: ${props => props.theme.sc_direction}
`;