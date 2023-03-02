import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        background: #FB6B6B;
        border: 1px solid #DBDBDB;
        height: 100%;
        width: 100%;
    }
    main{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export default GlobalStyle;