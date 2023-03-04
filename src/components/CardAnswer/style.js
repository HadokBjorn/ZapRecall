import styled from "styled-components";

export const Answer = styled.li`
    flex-direction: column;
    align-items: flex-start;
    
    height: 131px;
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    button{
        width: 85.17px;
        height: 37.17px;
        border-radius: 5px;
        border: none;

        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;

        color: #FFFFFF;
    }
    .red{
        background-color: #FF3030;
    }
    .yellow{
        background-color: #FF922E;
    }
    .green{
        background-color: #2FBE34;
    }
`