import CardContainer from "./style";
import playImg from "../../assets/seta_play.png";
import erroImg from "../../assets/icone_erro.png";
import acertoImg from "../../assets/icone_certo.png";
import quaseImg from "../../assets/icone_quase.png";
import CardQuestion from "../CardQuestion";
import CardAnswer from "../CardAnswer";
import { useState } from "react";

function Card({
    cards,
    cardRespondido,
    setCardRespondido,
    mudaFooter
}) {
    const cardClicado = [];
    const respostaClicada = [];
    const naoLembrou = [];
    const quaseLembrou = [];
    const lembrou = [];
    const screenInitial = cards.map((card,i) =>(
            <li key={i} className={''}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="play-btn" onClick={()=>AddQuestion(card)} src={playImg} alt="Play"/>
            </li>
        ));
    
    const [screen, setScreen] = useState(screenInitial);

    function AddQuestion(card) {
        cardClicado.push(card);
        const renderScreen = [];
        cards.forEach((element,i) => {
            if(naoLembrou.includes(element) && element !== card){
                renderScreen.push(<li key={i} className={"nao-lembra"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="no-icon" src={erroImg} alt="Erro"/>
                </li>)
            }else if(quaseLembrou.includes(element) && element !== card){
                renderScreen.push(<li key={i} className={"quase-lembra"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="partial-icon" src={quaseImg} alt="quase-acertou"/>
                </li>)
            }else if(lembrou.includes(element) && element !== card){
                renderScreen.push(<li key={i} className={"zap"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="zap-icon" src={acertoImg} alt="acertou"/>
                </li>)
            }else if(respostaClicada.includes(element) && element !== card){
                renderScreen.push((<CardAnswer 
                    key={i} 
                    card={element}
                    cards={cards}
                    screen={screen}
                    setScreen={setScreen}
                    AddQuestion={AddQuestion}
                    AddAnswer={AddAnswer}
                    naoLembrou={naoLembrou}
                    quaseLembrou={quaseLembrou}
                    lembrou={lembrou}
                    cardClicado={cardClicado}
                    respostaClicada={respostaClicada}
                    playImg={playImg}
                    erroImg={erroImg}
                    cardRespondido={cardRespondido}
                    setCardRespondido={setCardRespondido}
                    acertoImg={acertoImg}
                    quaseImg={quaseImg}
                    mudaFooter={mudaFooter}
                    />))
            }else if(cardClicado.includes(element)){
                renderScreen.push(<CardQuestion key={i} click={()=>AddAnswer(element)} card={element}/>)
            }else{
            renderScreen.push(<li key={i}>
            <p data-test="flashcard-text">Pergunta {i+1}</p>
            <img data-test="play-btn" onClick={()=>AddQuestion(element)} src={playImg} alt="Play"/>
            </li>)
            }
        });
        setScreen(renderScreen);
        
        console.log("tá chamando a func AddQuestion")
        
    }
    function AddAnswer(card){
        console.log("tá chamando a func AddAnswer")

        respostaClicada.push(card)
        const newlist = [];

        cards.forEach((element,i) => {
            if(naoLembrou.includes(element) && element !== card){
                newlist.push(<li data-test="flashcard" key={i} className={"nao-lembra"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="no-icon" src={erroImg} alt="erro"/>
                </li>)
            }else if(quaseLembrou.includes(element) && element !== card){
                newlist.push(<li key={i} className={"quase-lembra"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="partial-icon" src={quaseImg} alt="quase-acertou"/>
                </li>)
            }else if(lembrou.includes(element) && element !== card){
                newlist.push(<li key={i} className={"zap"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="zap-icon" src={acertoImg} alt="acertou"/>
                </li>)
            }else if((cardClicado.includes(element) && element === card)|| respostaClicada.includes(element)){
                newlist.push((<CardAnswer 
                    key={i} 
                    card={element}
                    cards={cards}
                    screen={screen}
                    setScreen={setScreen}
                    AddQuestion={AddQuestion}
                    AddAnswer={AddAnswer}
                    naoLembrou={naoLembrou}
                    quaseLembrou={quaseLembrou}
                    lembrou={lembrou}
                    cardClicado={cardClicado}
                    respostaClicada={respostaClicada}
                    playImg={playImg}
                    erroImg={erroImg}
                    cardRespondido={cardRespondido}
                    setCardRespondido={setCardRespondido}
                    acertoImg={acertoImg}
                    quaseImg={quaseImg}
                    mudaFooter={mudaFooter}
                    />))
            }else if(cardClicado.includes(element) && element !== card && !respostaClicada.includes(element)){
                newlist.push(<CardQuestion click={()=>AddAnswer(element)} card={element}/>)
            }else{
                newlist.push(<li data-test="flashcard" key={i}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="play-btn" onClick={()=>AddQuestion(element)} src={playImg} alt="Play"/>
                </li>)
            }
        });

        setScreen(newlist);
    }

    return(
        <CardContainer>
            
            {screen}
            
        </CardContainer>
    )
}

export default Card;