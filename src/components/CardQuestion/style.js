import styled from "styled-components";

export const Question = styled.li`
    flex-direction: column;
    position: relative;

    height: 131px;

    img{
        position: absolute;
        width: 30px;
        height: 20px;
        right: 15px;
        bottom: 15px;
    }
    p{
        width: 100%;
        text-align: left;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }
`