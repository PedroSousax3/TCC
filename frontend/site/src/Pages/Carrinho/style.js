import styled from 'styled-components'

export const CarrinhoStyled = styled.div``;

export const ConteinerItens = styled.div`
    display: flex;
    width: ${props => props.theme.sc_width};
    height: ${props => props.theme.sc_height};
    min-height: ${props => props.theme.sc_min_height};
    padding: ${props => props.theme.sc_padding};
    margin: ${props => props.theme.sc_margin};
    background-color: ${props => props.theme.sc_bg_color};
`;

export const Pesquisa = styled.div`
    position: fixed;

    width: calc(250px - 20px);
    height: calc(100vh - 80px);

    background-color: ${props => props.theme.sc_bg_color};
`;