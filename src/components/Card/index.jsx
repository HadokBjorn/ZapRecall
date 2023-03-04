import CardContainer from "./style";
import playImg from "../../assets/seta_play.png";
import CardQuestion from "../CardQuestion";
import CardAnswer from "../CardAnswer";
import { useState } from "react";

function Card({
    cards,
}) {
    const screenInitial = cards.map((card,i) =>(
            <li key={i} className={''}>
                <p>Pergunta {i+1}</p>
                <img onClick={()=>AddQuestion(card,i)} src={playImg} alt="Play"/>
            </li>
        ));
    
    const [screen, setScreen] = useState(screenInitial);

    function AddQuestion(card,i) {
        const newlist = [...screen];
        newlist[i] = (<CardQuestion key={i} click={()=>AddAnswer(card,i)} card={card}/>)

        setScreen(newlist);
        
        console.log("tá chamando a func")
        console.log("tela 1 estado inicial", screen)
        console.log("newlist", newlist)
    }
    function AddAnswer(card,i){
        console.log("tá chamando a func AddAnswer")
        const newlist = [...screen];
        newlist[i] = (<CardAnswer key={i} card={card}/>)

        setScreen(newlist);
        
        console.log("tá chamando a func")
        console.log("tela 1 estado inicial", screen)
        console.log("newlist", newlist)
    }

    return(
        <CardContainer>
            
            {screen}
            
        </CardContainer>
    )
}

export default Card;