import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Components/Buttons/Button";

function App() {
    const [state, setState] = useState(0)
    const increaseNumber = () => {
        setState(state+1)
    }
    const clearNumber = () => {
        setState(0)
    }
    return (
        <div>
            <div className='display'>{state}</div>
            <div className='buttonBox'>
                <Button buttonStatus={state === 5?true: false}  className={state === 5?'unActiveButton': ''} name='Increase' callBack={increaseNumber}/>
                <Button buttonStatus={state === 0?true: false} className={state === 0?'unActiveButton': ''} name='Clear' callBack={clearNumber}/>
            </div>
        </div>
    );
}

export default App;
