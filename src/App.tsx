
import './App.css';
import Form1 from './components/FormExample';
import { Component1 ,Component2} from './components/multipleComponents';
import ToDO from './components/ToDo';

function App() {
  return (
    <div>
      <ToDO></ToDO>
      <Component1></Component1>
      <Component2></Component2>
      <Form1/>
    </div>
  );
}

export default App;
