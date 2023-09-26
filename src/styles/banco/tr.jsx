import { styled } from "styled-components";

const Tr = styled.tr `

    border: 1px solid;

    &:hover {
        background-color: #cccbcb;
    }

    &:nth-child(even) {
    background-color: #e4e4e4;

    &:hover {
        background-color: #cccbcb;
    }
}

`

export default Tr