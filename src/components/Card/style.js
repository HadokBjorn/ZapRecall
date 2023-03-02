import styled from "styled-components";

const CardContainer = styled.ul`
    width: 300px;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;

    li{
        width: inherit;
        height: 65px;

        padding: 15px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
    }
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        color: #333333;
    }
`

export default CardContainer;