import { Answer } from "./style";

function CardAnswer({card,}){
    return(
        <Answer className={''}>
            <p>{card.answer}</p>
            <div>
                <button className="red">Não lembrei</button>
                <button className="yellow">Quase não lembrei</button>
                <button className="green">zap</button>
            </div>
        </Answer>
    )
}

export default CardAnswer;