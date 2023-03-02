import Header from "../Header";
import Card from "../Card";
import Footer from "../Footer";
import cards from "../../data/DataCards";
function App() {
  return (
    <div>
      <Header/>
      <main>
      <Card cards={cards}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
