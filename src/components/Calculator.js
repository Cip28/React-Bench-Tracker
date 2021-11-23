import React, {Component} from 'react';
import Screen from './Screen';
import Keypad from './Keypad';
import '../App.css';
// import { Button } from 'bootstrap';



class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            result:""
        }
        
    }
    onClick = button => {
        if (button === "=") {
            this.calculate()
        }
        else if (button === "C") {
            this.reset()
        }
        else if (button === "CE") {
            this.backspace()
        } else {
            this.setState({
                result:this.state.result+button
            })
        }
    }
    
    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult=this.state.result.replace('--','+')
        } else {
            checkResult=this.state.result
        }

        try {
            this.setState({
                result:(eval(this.state.result) || "") + ""
            })
        }
        catch (e) {
            this.setState({
                result:"error"
            })
        }
    }

    reset = () => {
        this.setState({
            result: ""
        })
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }

    render () {
        return (
            <div className="calculator">
                <div className="wrapper">
                    <h1> Basic Calculator</h1>
                    <Screen result={this.state.result} />
                    <Keypad onClick={ this.onClick}/>
                </div>
        </div>
    
    );
    }
}
 
export default Calculator;