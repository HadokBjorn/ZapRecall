import logoInicial from "../../assets/logo.png";
import { ContainerTelaWellcome } from "./style";

function TelaWellcome({desativaTela}){
    return(
        <ContainerTelaWellcome>
            <img src={logoInicial} alt="Tela Wellcome"/>
            <p>ZapRecall</p>
            <button onClick={desativaTela}>Iniciar Recall!</button>
        </ContainerTelaWellcome>
    )
}

export default TelaWellcome;