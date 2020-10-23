import styled from 'styled-components';

export const MenuSpaceTop = styled.div`
    margin-bottom: 60px;
`;

export const MenuSpaceBotton = styled.div`
    margin-top: 100px;
`;

export const MenuStyled = styled.div`   
    width: 100%;
    height: 60px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    padding: 0px 20px;
    border-bottom: 3px solid var(--verde-escuro);
    background-color: var(--verde-claro);

    .LogoMenu {
        height:50px;
    }          
    
    @media screen and (max-width: 770px)
    {
        & {
            justify-content: center;
        }
    }
`;

export const ConteinerItensMenu = styled.ul`
    display: flex;
    padding: 0px;
    margin: 0px;

    & > li > a.fas, & > li > a.far {
        display: none;
    }

    & > li > a {
        padding: 10px 15px;
        text-decoration: none;
        border-radius: 4px;
        font-size: 18px;
        font-weight: 600;
        color: var(--verde-escuro);

        :hover {
            background-color: var(--verde-escuro);
            color: white;
        }
    }

    & > li {
        list-style-type: none;
        margin: 3px 6px;
    }

    @media screen and (max-width: 770px)
    {
        & {
            display: flex;
            justify-content: space-around;
            align-items: center;
            
            position: fixed;
            bottom: 0;
            left: 0;
            
            height: 60px;
            width: 100vw;
            border-top: 3px solid var(--verde-escuro);
            background-color: var(--verde-claro);

            z-index: 100;

            .texto {
                display: none;
            }
        }

        & > li {
            margin: 0;
        }

        & > li > a.fas, & > li > a.far {
            display: block;
            font-size: 30px;
            color: var(--verde-escuro);

            :hover {
                color: white;
            }
        }
    }
`;