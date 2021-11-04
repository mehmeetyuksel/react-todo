import Header from './components/Header';
import InputArea from './components/InputArea';
import ActionList from './components/ActionList';
import {useState} from "react"
import './App.css';

function App() {

  const [state, setState] = useState([{name: "", isDone : null}])
 
  return (
    <div className="App">
      <Header />
      <InputArea addState = {setState} actions = {state} />
      <ActionList actions = {state} changeActions = {setState} />
    </div>
  );
}

export default App;
