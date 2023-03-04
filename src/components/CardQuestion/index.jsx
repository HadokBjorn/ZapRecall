import setaVirar from "../../assets/seta_virar.png";
import { Question } from "./style";

function CardQuestion({card, click,}){
    return(
        <Question className={''}>
            <p>{card.question}</p>
            <img onClick={click} src={setaVirar} alt="botão"/>
        </Question>
    )
}

export default CardQuestion;