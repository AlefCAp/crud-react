import { styled } from "styled-components";

const WrapperInput = styled.div `

    display: flex;
    flex-direction: ${({line}) => (line ? '' : 'column')};
    margin-top: ${({margin}) => (margin ? '25px' : '')};
    margin-left: ${({left}) => (left ? '25px' : '')};
    justify-content: ${({space}) => (space ? 'space-between' : '')};
    position: ${({absolute}) => (absolute ? 'absolute' : '')};

`

export default WrapperInput