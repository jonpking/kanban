import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/Card";
import Lane from "./components/Lane/Lane";

function App() {
  return (
    <div className="App">
      <Lane>
        <Card />
        <Card />
        <Card />
      </Lane>
    </div>
  );
}

export default App;
