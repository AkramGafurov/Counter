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
                <Button name='Increase' callBack={increaseNumber}/>
                <Button name='Clear' callBack={clearNumber}/>
            </div>
        </div>
    );
}

export default App;
