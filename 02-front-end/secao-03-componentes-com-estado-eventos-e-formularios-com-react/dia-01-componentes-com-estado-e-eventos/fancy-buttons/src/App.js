import logo from './logo.svg';
import './App.css';

function handleClick() {
  console.log('clicou');
}

function App() {
  return (
    <button onClick={handleClick}>Meu botão</button>
  );
}

export default App;
