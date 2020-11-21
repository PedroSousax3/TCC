import styled from  'styled-components'

export const Card = styled.div`
    width: 100%;
    height: auto;
    padding : 15px;

    background-color : ${props => props.theme.bg_color};

    display: flex;
    flex-direction: column;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);

    margin: 10px 0px;
    border-left: 7px solid rgba(0, 0, 0, 0.4);

    .button-card {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 10px;
        justify-content: space-between;
    }
`;

export const Title = styled.div`
    min-height: 35px;
    line-height: 35px;
    
    margin: auto 0px;
    padding: auto 15px;
    padding-left: 8px;

    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bg_color};
`;

export const Container = styled.div`
    height: auto;
    max-width: 100%;
        
    display: flex;
    padding-top : 4px;

    align-items: flex-start;

    & > .item {
        padding-left: 10px;
    }

    @media screen and (max-width: 650px)
    {
        & {
            padding-left: 0px;
        }

        & > .item {
            width: 100%;
            border-top: 3px solid rgba(0, 0, 0, 0.4);
            border-left: none;
            padding-left: 0px;
        }

        & {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 380px)
    {
        & > .item {
            padding-left: 5px;
        }
    }
`;

export const ImagemCard = styled.img`
    max-width: 180px;
    margin-right: 10px;

    @media screen and (max-width: 650px)
    {
        margin: auto;
    }

    @media screen and (max-width: 380px)
    {
        & {
            max-width: 100%;
            margin-right: 0px;
        }
    }
`;