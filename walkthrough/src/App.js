import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingProps from './components/FunctionalGreetingProps';
import StatefulGreeting from './components/StatefulComponent';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import ConditionalFunctional from './components/ConditionalFunctional';
import ConditionalClass from './components/ConditionalClass';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import ListRendering from './components/ListRendering';
import ListRenderingWithProps from './components/Book';

function App() {
  return (
    <div className="App">
      <h2>Components Basics</h2>
      <FunctionalGreeting/>
      <FunctionalGreetingProps intro="Hello!" name="Richard"/>
      <StatefulGreeting intro="Hello!"/>
      <hr />
      <h2>Events</h2>
      <EventsClass />
      <EventsFunctional />
      <hr />
      <h2>Conditional Rendering</h2>
      <ConditionalFunctional connected={true}/>
      <ConditionalClass />
      <hr />
      <h2>Nesting</h2>
      <NestingComponents />
      <hr />
      <h2>Passing Props From Parent to Child</h2>
      <MethodsAsPropsParent/>
      <hr/>
      <h2>Passing Props From Child to Parent</h2>
      <MethodsAsPropsChild/>
      <hr />
      <h2>List Rendering</h2>
      <ListRendering />
      <hr />
    </div>
  );
}

export default App;
