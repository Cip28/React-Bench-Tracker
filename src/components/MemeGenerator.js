import React, {Component} from 'react'
import '../App.css';


class MemeGenerator extends Component{
    constructor() {
        super();
        this.state = {
            topText:"",
            bottomText:"",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        };
        this.handleChange=this.handleChange.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
          .then(response => {
        const { memes } = response.data
        this.setState({ allMemeImgs: memes })
        })
    }
    

    handleChange (event) {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name] : value})

    }

    submitHandler (event) {
        event.preventDefault();
        const randomNr = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMeme = this.state.allMemeImgs[randomNr].url
        this.setState({randomImg:randomMeme})
        
    }

    render () {
        return (
            <div className="memeGenerator">
                <form onSubmit={this.submitHandler}>

                    <input
                        value={this.state.topText}
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Top Text"
                        name="topText"
                        />
                    <input
                        value={this.state.bottomText}
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Bottom Text"
                        name="bottomText"
                        />
                    <br/>
                <button className="btn btn-primary">Generate new meme</button>
                </form>
                <div className="text">
                    <img src={this.state.randomImg} />
                    <div className="titles">
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
                </div>
            </div>
        )
    }
    
}
 
export default MemeGenerator;