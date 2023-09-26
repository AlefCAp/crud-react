import { styled } from "styled-components";

const WrapperButtons = styled.div `

    display: flex;
    margin-bottom: 8px;
    justify-content: ${({pagenavegation}) => (pagenavegation ? 'center' : '')};
    padding:  ${({pagenavegation}) => (pagenavegation ? '10px' : '')};
`

export default WrapperButtons