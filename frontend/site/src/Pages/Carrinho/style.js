import styled from 'styled-components'

export const CarrinhoStyled = styled.div``;

export const ConteinerItens = styled.div`
    display: flex;
    justify-content: space-between; 
    width: ${props => props.theme.sc_width};
    height: ${props => props.theme.sc_height};
    min-height: ${props => props.theme.sc_min_height};
    padding: ${props => props.theme.sc_padding};
    margin: ${props => props.theme.sc_margin};
    background-color: ${props => props.theme.sc_bg_color};

    #conteudo {
        flex-direction: column;
        padding: 10px 0px 0px 10px;
    }

    @media screen and (max-width: 850px)
    {
        &#container-itens {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }

        &#container-itens > #conteudo {
            width: 80%;
            margin: 0px 20px;
        }

        &#container-itens > #container-pesquisa {
            height: 100px;
            width: 100%;
            justify-content: center;
        }

        * {
            box-sizing: border-box;
        }
    }
`;

export const Pesquisa = styled.div`
    position: fixed;

    width: calc(250px - 20px);
    height: calc(100vh - 80px);

    background-color: ${props => props.theme.sc_bg_color};

    @media screen and (max-width: 850px)
    {
        & {
            height: 30px;
            width: 90%;
        }
    }
`;