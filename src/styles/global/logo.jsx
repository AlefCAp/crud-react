import { styled } from "styled-components";

const Logo = styled.img `

    width: ${({security, layout}) => 
    (security ? '150px' : 
    layout ? '120px' : '')};

    margin-bottom: ${({security}) => (security ? '35px' : '')};
`

export default Logo