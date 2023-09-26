import { styled } from "styled-components";

const Titulo = styled.h1 `

    margin-top: ${({recover}) => recover ? '' : '10px'};
    margin-bottom: ${({recover}) => recover ? '30px' : '20px'};
    text-align: center;
    font-size: ${({recover}) => (recover ? '25px' : '')};

`

export default Titulo