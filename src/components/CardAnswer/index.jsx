import { Answer } from "./style";
import erroImg from "../../assets/icone_erro.png";

function CardAnswer({card,indice, screen, setScreen, AddQuestion}){

    function notRemember(){
        const newList = [...screen];
        newList[indice]=(
            <li key={indice} className={"nao-lembra"}>
                <p>Pergunta {indice+1}</p>
            <img src={erroImg} alt="Play"/>
            </li>);
        setScreen(newList);
    }
    /* function almostRemember(){}
    function remember(){} */
    return(
        <Answer>
            <p>{card.answer}</p>
            <div>
                <button onClick={notRemember} className="red">Não lembrei</button>
                <button className="yellow">Quase não lembrei</button>
                <button className="green">zap</button>
            </div>
        </Answer>
    )
}

export default CardAnswer;