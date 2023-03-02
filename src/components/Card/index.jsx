import CardContainer from "./style";
import playImg from "../../assets/seta_play.png";

function Card({cards}){
    return(
        <CardContainer>
            {cards.map((c,i) =>(
            <li>
                <p>Pergunta {i+1}</p>
                <img src={playImg} alt="Play"/>
            </li>
            ))}
        </CardContainer>
    )
}

export default Card;