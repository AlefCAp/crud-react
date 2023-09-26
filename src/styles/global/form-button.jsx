import { styled } from "styled-components";

const FormButton = styled.button`

    margin: ${({margin}) => (margin ? '15px 0px 0px 0px' : '25px 0px')};
    padding: 10px;
    width: ${({maxwidth}) => (maxwidth ? '500px' : '250px')};
    border: none;
    border-radius: 10px;
    background-color: #da0812;
    color: #fff;
    font-size: 15px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

export default FormButton