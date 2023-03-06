import Header from "../Header";
import Card from "../Card";
import Footer from "../Footer";
import cards from "../../data/DataCards";
import { useState } from "react";
import TelaWellcome from "../TelaWellcome";


function App() {
  const [cardRespondido, setCardRespondido] = useState(0);
  const [telaAtiva, setTelaAtiva] = useState(true);

  function desativaTela(){
    setTelaAtiva(false);
  }

  function mudaFooter(item){
    setCardRespondido(item);
  }

  if(telaAtiva){
    return(
      <TelaWellcome desativaTela={desativaTela}/>
    )
  }else{
    return (
      <div>
        <Header/>
        <main>
        <Card 
        cards={cards}
        cardRespondido={cardRespondido}
        setCardRespondido={setCardRespondido}
        mudaFooter={mudaFooter}
        />
        </main>
        <Footer
        cards={cards.length}
        cardRespondido={cardRespondido}
        / >
      </div>
    );
  }
}

export default App;
