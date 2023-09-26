import { styled } from "styled-components";

const TableInput = styled.input `

    outline: none;
    border: none;
    border-bottom: 1px solid #b1b1b1;
    width: 30vw;
    font-size: 15px;
    text-align: center;
    padding: 3px;


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

export default TableInput