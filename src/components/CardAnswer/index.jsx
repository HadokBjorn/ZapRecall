import { Answer } from "./style";
import CardQuestion from "../CardQuestion";

function CardAnswer({
    card,
    cards,
    screen, 
    setScreen, 
    AddQuestion,
    AddAnswer,
    cardClicado,
    respostaClicada,
    naoLembrou,
    quaseLembrou,
    lembrou,
    playImg,
    erroImg,
    acertoImg,
    quaseImg,
    cardRespondido,
    setCardRespondido,
    mudaFooter
}){

    function notRemember(resposta){
        naoLembrou.push(resposta)
        mudaFooter(naoLembrou.length+lembrou.length+quaseLembrou.length);

        const newList = [];

        cards.forEach((element,i)=>{
            if(naoLembrou.includes(element)){
                newList.push(<li key={i} className={"nao-lembra"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="no-icon" src={erroImg} alt="Play"/>
                </li>)
            }else if(quaseLembrou.includes(element)&& element !== resposta){
                newList.push(<li key={i} className={"quase-lembra"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="partial-icon" src={quaseImg} alt="quase-acertou"/>
                </li>)
            }else if(lembrou.includes(element) && element !== card){
                newList.push(<li key={i} className={"zap"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="zap-icon" src={acertoImg} alt="acertou"/>
                </li>)
            }else if(respostaClicada.includes(element) && element !== resposta){
                newList.push((<CardAnswer 
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
                    />))
            }else if(cardClicado.includes(element)&& element !== resposta){
                newList.push(<CardQuestion key={i} click={()=>AddAnswer(element)} card={element}/>)
            }else{
            newList.push(<li data-test="flashcard" key={i}>
            <p data-test="flashcard-text">Pergunta {i+1}</p>
            <img data-test="play-btn" onClick={()=>AddQuestion(element)} src={playImg} alt="Play"/>
            </li>)
            }
        })
        
            
        setScreen(newList);
    }
    function almostRemember(resposta){

        quaseLembrou.push(resposta);
        mudaFooter(naoLembrou.length+lembrou.length+quaseLembrou.length);
        const newList = [];

        cards.forEach((element,i)=>{
            if(quaseLembrou.includes(element)){
                newList.push(<li key={i} className={"quase-lembra"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="partial-icon" src={quaseImg} alt="quase-acertou"/>
                </li>)
            }else if(naoLembrou.includes(element) && element !== card){
                newList.push(<li key={i} className={"nao-lembra"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="no-icon" src={erroImg} alt="errou"/>
                </li>)
            }else if(lembrou.includes(element) && element !== card){
                newList.push(<li key={i} className={"zap"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="zap-icon" src={acertoImg} alt="acertou"/>
                </li>)
            }else if(respostaClicada.includes(element) && element !== resposta){
                newList.push((<CardAnswer 
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
            }else if(cardClicado.includes(element)&& element !== resposta){
                newList.push(<CardQuestion key={i} click={()=>AddAnswer(element)} card={element}/>)
            }else{
            newList.push(<li data-test="flashcard" key={i}>
            <p data-test="flashcard-text">Pergunta {i+1}</p>
            <img data-test="play-btn" onClick={()=>AddQuestion(element)} src={playImg} alt="Play"/>
            </li>)
            }
        })
        
            
        setScreen(newList);
    }
    function remember(resposta){
        lembrou.push(resposta);
        mudaFooter(naoLembrou.length+lembrou.length+quaseLembrou.length);
        const newList = [];

        cards.forEach((element,i)=>{
            if(lembrou.includes(element)){
                newList.push(<li key={i} className={"zap"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="zap-icon" src={acertoImg} alt="acertou"/>
                </li>)
            }else if(quaseLembrou.includes(element) && element !== resposta){
                newList.push(<li key={i} className={"quase-lembra"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="partial-icon" src={quaseImg} alt="quase-acertou"/>
                </li>)
            }else if(naoLembrou.includes(element) && element !== resposta){
                newList.push(<li key={i} className={"nao-lembra"}>
                <p data-test="flashcard-text">Pergunta {i+1}</p>
                <img data-test="no-icon" src={erroImg} alt="errou"/>
                </li>)
            }else if(respostaClicada.includes(element) && element !== resposta){
                newList.push((<CardAnswer 
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
            }else if(cardClicado.includes(element)&& element !== resposta){
                newList.push(<CardQuestion key={i} click={()=>AddAnswer(element)} card={element}/>)
            }else{
            newList.push(<li data-test="flashcard" key={i}>
            <p data-test="flashcard-text">Pergunta {i+1}</p>
            <img data-test="play-btn" onClick={()=>AddQuestion(element)} src={playImg} alt="Play"/>
            </li>)
            }
        })
        
        setScreen(newList);
    }
    return(
        <Answer>
            <p data-test="flashcard-text">{card.answer}</p>
            <div>
                <button onClick={()=>notRemember(card)} className="red">Não lembrei</button>
                <button onClick={()=>almostRemember(card)} className="yellow">Quase não lembrei</button>
                <button onClick={()=>remember(card)} className="green">zap</button>
            </div>
        </Answer>
    )
}

export default CardAnswer;