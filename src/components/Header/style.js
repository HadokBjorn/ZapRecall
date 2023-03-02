import styled from "styled-components";

const HeaderContainer = styled.header`
    height: 94px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 46px;
    img{
        width: 52px;
        height: 60px;
    }
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;

        color: #FFFFFF;

        transform: rotate(0.58deg);
    }
`
export default HeaderContainer;