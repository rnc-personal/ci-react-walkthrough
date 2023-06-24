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
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import ComponentWillUnmount from './components/ComponentWillUnmount';
import ControlledForm from './components/ControlledForm';
import UnControlledForm from './components/UnControlledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import HTTPReqClass from './components/HTTPReqClass';
import HTTPPostClass from './components/HTTPPostClass';
import HTTPGetFunctional from './components/HTTPGetFunctional';

function App() {
  return (
    <div className="App">
      {/* <h2>Components Basics</h2>
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
      <h2>LifeCycles</h2>
      <p>Component Did Update</p>
      <LifeCyclesCDU />
      <p>Component Did Mount</p>
      <LifeCyclesCDM />
      <hr />
      <p>Component Will Unmount</p>
      <ComponentWillUnmount/>
      <hr />
      <h2>Forms in React</h2>
      <p>Controlled Form</p>
      <ControlledForm />
      <hr />
      <p>UnControlled Form</p>
      <UnControlledForm />
      <hr />
      <h2>Search</h2>
      <SearchBar />
      <hr />
      <h2>Hooks: UseState</h2>
      <ControlledFormHooks />
      <hr />
      <UseStateWithArrays />
      <hr />
      <UseStateWithObjects />
      <hr />
      <h2>Hooks: useEffect</h2>
      <UseEffectCounter /> */}
      <h2>Data Fetching</h2>
      {/* <h4>Class Components</h4>
      <p>GET:</p>
      <HTTPReqClass />
      <hr />
      <p>POST:</p>
      <HTTPPostClass /> */}
      <hr />
      <h4>Functional Components</h4>
      <HTTPGetFunctional />
    </div>
  );
}

export default App;
