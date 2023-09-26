import { styled } from "styled-components";

const Label = styled.label `

    display: ${({none}) => (none ? 'none' : '')};
    position: ${({relative}) => (relative ? 'relative' : '')};
    font-size: 12px;
    padding: ${({modal}) => (modal ? '' : '3px')};
    color: #4d4d4d;

`

export default Label