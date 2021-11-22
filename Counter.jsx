import React ,{useState}from 'react';
import counter from './counter.css';

const Counter = () => {
    let[count,update]=useState(0);
    let Increment=()=>{
        update(count+1);
    }
    let Decrement=()=>{
        update(count-1);
    }
    let Reset=()=>{
        update(0);
    }

    return (
        <div className="counter">
        <h1>count {count}</h1>
         <button onClick={Increment}>Increment</button>        
         <button onClick={Decrement}>Decrement</button>
         <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter
