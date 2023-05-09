import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingProps from './components/FunctionalGreetingProps';
import StatefulGreeting from './components/StatefulComponent';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingProps intro="Hello!" name="Richard"/>
      <StatefulGreeting intro="Hello!"/>
    </div>
  );
}

export default App;
