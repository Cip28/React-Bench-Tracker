import React from'react'
import '../App.css'

const Button = () => {
    const [count, setCount] = React.useState(0);

    function increment () {
        setCount(count+1)
    }
    function decrement () {
        setCount(count-1)
    }
    function reset () {
        setCount(0)
    }
    
    return (
        <div className="button">
            <button onClick={increment} className="increment btn btn-primary m-1">Increment me</button>
            
            <button onClick={decrement} className="decrement btn btn-primary m-1">Decrement me</button>
            <br/>
            <h1>{count}</h1>
            <button onClick={reset} className="reset btn btn-danger d-flex justify-content-center align-items-center">Reset</button>
        </div>

      );
}
 
export default Button;