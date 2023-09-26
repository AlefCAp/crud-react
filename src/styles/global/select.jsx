import { styled } from "styled-components";

const Select = styled.select `

    margin: 10px 0px;
    padding: ${({modal}) => (modal ? '5px' : '')};
    border: 1px solid;
    border-radius: 5px;

`

export default Select