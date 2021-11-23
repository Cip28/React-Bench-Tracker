import React, {Component} from 'react'


class Keypad extends Component {
    render () {
        return (
            <div className="buttons">
                <button className="btn-secondary" name="(" onClick={e => this.props.onClick(e.target.name)} >(</button>
                <button className="btn-secondary" name=")" onClick={e => this.props.onClick(e.target.name)} >)</button>
                <button className="btn-danger" name="CE" onClick={e => this.props.onClick(e.target.name)} >CE</button>
                <button className="btn-danger" name="C" onClick={e => this.props.onClick(e.target.name)} >C</button>
                <br/>
                <button className="btn-secondary accent" name="1" onClick={e => this.props.onClick(e.target.name)} >1</button>
                <button className="btn-secondary accent" name="2" onClick={e => this.props.onClick(e.target.name)} >2</button>
                <button className="btn-secondary accent" name="3" onClick={e => this.props.onClick(e.target.name)} >3</button>
                <button className="btn-secondary" name="+" onClick={e => this.props.onClick(e.target.name)} >+</button>
                <br/>
                <button className="btn-secondary accent" name="4" onClick={e => this.props.onClick(e.target.name)} >4</button>
                <button className="btn-secondary accent" name="5" onClick={e => this.props.onClick(e.target.name)} >5</button>
                <button className="btn-secondary accent" name="6" onClick={e => this.props.onClick(e.target.name)} >6</button>
                <button className="btn-secondary" name="-" onClick={e => this.props.onClick(e.target.name)} >-</button>
                <br/>
                <button className="btn-secondary accent" name="7" onClick={e => this.props.onClick(e.target.name)} >7</button>
                <button className="btn-secondary accent" name="8" onClick={e => this.props.onClick(e.target.name)} >8</button>
                <button className="btn-secondary accent" name="9" onClick={e => this.props.onClick(e.target.name)} >9</button>
                <button className="btn-secondary" name="*" onClick={e => this.props.onClick(e.target.name)} >*</button>
                <br/>

                <button className="btn-secondary accent" name="0" onClick={e => this.props.onClick(e.target.name)} >0</button>
                <button className="btn-secondary" name="." onClick={e => this.props.onClick(e.target.name)} >.</button>
                <button className="btn-secondary" name="%" onClick={e => this.props.onClick(e.target.name)} >%</button>
                <button className="btn-primary" name="=" onClick={e => this.props.onClick(e.target.name)} >=</button>
            </div>

        );
    }
}
 
export default Keypad;