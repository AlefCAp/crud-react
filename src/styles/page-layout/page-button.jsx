import { styled } from "styled-components";

const PageButton = styled.button `

    padding: 7px;
    margin: ${({more, edit, delet, navegation}) => (more || edit || delet ? ' 4px 10px':
    navegation ? '0px 3px' : '0px 10px')};
    border: 1px solid;
    border-radius: 3px;
    cursor: pointer;
    background-color: ${({gray, green, red}) => 
        (gray ? '' :
        green ? '#3ea95e' :
        red ? '#d63840' : 
        '')};
        
    transition: all 150ms ease-in-out;

    &:hover {
    background-color: ${({gray, blue, red}) => 
            (gray ? '#0000004a' :
            blue ? '#017e26' :
            red ? '#a30a12' : '')}
    };
`

export default PageButton