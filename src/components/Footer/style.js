import styled from "styled-components";

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    z-index: 2;

    width: 100%;
    height: 70px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;

        color: #333333;
    }
`

export default FooterContainer;