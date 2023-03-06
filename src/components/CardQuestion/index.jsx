import setaVirar from "../../assets/seta_virar.png";
import { Question } from "./style";

function CardQuestion({card, click,}){
    return(
        <Question className={''}>
            <p data-test="flashcard-text">{card.question}</p>
            <img data-test="turn-btn" onClick={click} src={setaVirar} alt="botão"/>
        </Question>
    )
}

export default CardQuestion;