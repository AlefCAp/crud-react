import { styled } from "styled-components";

const Input = styled.input `

    display: ${({none}) => (none ? 'none' : '')};
    position: ${({relative}) => (relative ? 'relative' : '')};
    border: none;
    border-bottom: 1px solid #b1b1b1;
    padding: 5px;
    width: ${({modalbig, modalmedium, modalsmall}) => 
    (modalbig ? '500px' :
    modalmedium ? '200px' :
    modalsmall ? '150px' : '250px')};
    outline: none;
    font-size: 18px;
    transition: all 150ms ease-in-out;

    &:hover {
        background-color: #e9e9e959;
        border-radius: 5px;
    }

    &:focus {
        border-bottom: 2px solid #da0812;
        background-color: transparent;
        border-radius: 0px;
    }
`

export default Input