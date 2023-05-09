import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingProps from './components/FunctionalGreetingProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingProps/>
    </div>
  );
}

export default App;
