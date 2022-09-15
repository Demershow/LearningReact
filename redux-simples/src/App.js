import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <h1>Exercicio React + Redux (Basico )</h1>
      <div className="linha">
        <Card red title="Card 1">y</Card>
      </div>
      <div className="linha">
        <Card green title="Card 2">y</Card>
        <Card blue title="Card 3">x</Card>
        <Card purple title="Card 4">x</Card>
      </div>
    </div>
  );
}

export default App;
