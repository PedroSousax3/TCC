import styled from 'styled-components';



export const CaixaEsqueciSenha = styled.div`
    margin-top : 100px;
    width : 100%;
    display : flex;
    align-items : center;
    flex-direction: column;
    justify-content : center;
    font-weight:bold;

    input {
        width : 300px;
    }

    & > div {
        width : 300px;
        margin-top : 30px;
        position: relative;
    }

    & > div > i {
        color: black;
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
    }

    button {
        width : 300px;
    }

    & > * {
        width : 100%;
        margin : 3px;
    }
`;