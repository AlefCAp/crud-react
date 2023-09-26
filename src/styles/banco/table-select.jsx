import styled from "styled-components";

const TableSelect = styled.select `

    outline: none;
    padding: 3px;
    border: none;
    border-bottom: 1px solid #b1b1b1;
    margin-bottom: 8px;

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
    

export default TableSelect