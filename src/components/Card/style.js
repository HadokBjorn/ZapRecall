import styled from "styled-components";

const CardContainer = styled.ul`
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-bottom:180px;

    li{
        width: 300px;
        min-height: 65px;

        padding: 15px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;

        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        color: #333333;
    }
    .nao-lembra{
        text-decoration-line: line-through;
        color: #FF3030;
    }
    .quase-nao-lembra{
        text-decoration-line: line-through;
    color: #FF922E;
    }
    .zap{
        text-decoration-line: line-through;
        color: #2FBE34;
    }
`

export default CardContainer;