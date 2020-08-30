import React, { Component } from 'react'
import '../styles/Answers.css'

export default class Answers extends Component {

    state = {
        sizes : [6,5,4,3,4,5,6]
    }

    size = x => {return {height: `${x*10}px`, width: `${x*10}px`}}

    render() {
        return (
            <div className="answers">
                <span className="agreedisagree"> Disagree </span>
                {this.state.sizes.map((size,index) => {
                    let classes = `button button${index+1}`;
                    classes += index+1 === this.props.chosenAnswer ? " button"+(index+1)+"_clicked" : "";
                    
                    return (
                    <div 
                        key = {index} 
                        className={classes} 
                        id={index+1} 
                        style = {this.size(size)} 
                        onClick = {e => this.props.handleSelect(e,index + 1, this.props.qIndex)}
                    >
                        <span>
                            {index+1 === this.props.chosenAnswer ? "✔" : ""}
                        </span> 
                    </div>
                )
                })}
                <span className="agreedisagree"> Agree </span>
            </div>
        )
    }
}