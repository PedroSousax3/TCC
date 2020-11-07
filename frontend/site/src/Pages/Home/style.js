import styled from 'styled-components'

export const ContainerPesquisa = styled.div`
    position: fixed;

    width : ${props => props.theme.sc_width};

    display: flex;
    justify-content: space-between;

    background-color : ${props => props.theme.bg_color};

    padding: 5px 20px;
`;