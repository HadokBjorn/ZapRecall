import CardContainer from "./style";
import playImg from "../../assets/seta_play.png";

function Card(){
    return(
        <CardContainer>
            <li>
                <p>Pergunta 1</p>
                <img src={playImg} alt="Play"/>
            </li>
        </CardContainer>
    )
}

export default Card;