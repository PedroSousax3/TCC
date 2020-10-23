import styled from 'styled-components'

export const ConteinerItens = styled.div`
    box-sizing: border-box;
    display: flex;
    box-sizing: border-box;
    width: ${props => props.theme.sc_width};
    background-color: ${props => props.theme.sc_background_color};
    padding: ${props => props.theme.sc_padding};
    margin: ${props => props.theme.sc_margin};
    min-height: ${props => props.theme.sc_min_height};
    height: ${props => props.theme.sc_height};

    @media screen and (max-width: 770px)
    {
        &#container {
            flex-direction: column-reverse;
        }
        
        &#container > #pesquisa, #container > #itens {
            width: 100%;
            margin: 0px;
        }

        &#container > #itens {
        }

        &#container > #pesquisa {
            height: auto;
            margin-bottom: 10px;
        }

    }
`;