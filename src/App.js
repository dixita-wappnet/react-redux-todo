import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveTaskToRedux } from './redux/reducer';

function App() {

const [input, setInput] = useState();
const statex = useSelector(state => state )
const dispatch = useDispatch();

console.log("statex -->", statex);

const changeHandler = (e) => {
  setInput(e.target.value);
  console.log(input);
};

const saveToRedux = ( ) => {
  dispatch(saveTaskToRedux(input)); 
    console.log("function is called");
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks</h1>
        <input value={input} onChange={changeHandler}></input>
        <button type='button' onClick={saveToRedux}>Save Task</button>
        {statex.tasks.map((task,Index)=> {
            return <div key={Index}>{task}</div>
        })}
      </header>
    </div>
  );
}

export default App;
