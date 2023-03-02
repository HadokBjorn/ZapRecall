import logo from '../../assets/logo.png';
import HeaderContainer from './style';

function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="logo de um Raio dourado"/>
            <h1>ZapRecall</h1>
        </HeaderContainer>
    )
}

export default Header;