import React from 'react'
import '../App.css';
import FAQ from '../images/FAQ.jpg';
import splitterCalc from '../images/splitterCalc.jpg';
import articlePreview from '../images/article-preview.jpg';
import GridComp from '../images/GridComp.jpg';
import formValidation from '../images/formValidation.png';
import calculator from '../images/calculator-image.png';


const NonReact = () => {
    return (
        <div className="noreact">
            <h1>These are some projects I've made before learning React</h1>
            <div className="cards">
                <div className="card">
                    <img className="card-img-top" src={FAQ} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">FAQ Accordion</h5>
                        <p className="card-text">Technologies: HTML, CSS, SASS, JS</p>
                        <a href="https://github.com/Cip28/FAQ-Accordion-Challenge" className="btn btn-primary">Go to the repository</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={splitterCalc} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Bill Splitter Calculator</h5>
                        <p className="card-text">Technologies: HTML, CSS, JS</p>
                        <a href="https://github.com/Cip28/Splitter-calculator" className="btn btn-primary">Go to the repository</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={articlePreview} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Article Preview</h5>
                        <p className="card-text">Technologies: HTML, CSS, JS</p>
                        <a href="https://github.com/Cip28/Article-Preview-Challenge" className="btn btn-primary">Go to the repository</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={GridComp} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Grid Components</h5>
                        <p className="card-text">Technologies: HTML, CSS</p>
                        <a href="https://github.com/Cip28/Single-price-grid-Challenge" className="btn btn-primary">Go to the repository</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={calculator} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Calculator</h5>
                        <p className="card-text">Technologies: HTML, CSS, JS</p>
                        <a href="https://github.com/Cip28/Calculator" className="btn btn-primary">Go to the repository</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={formValidation} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Form Validation</h5>
                        <p className="card-text">Technologies: HTML, CSS, JS</p>
                        <a href="https://github.com/Cip28/Form-Validation" className="btn btn-primary">Go to the repository</a>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default NonReact;