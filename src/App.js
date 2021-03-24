import React, { Component } from 'react';
import './styles/App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import data from './data/questions.json';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Result from './components/Result';

export default class App extends Component {
  state = {
    questions : data.questions,
    keys : [
      'Extraversion',
      'Agreeableness',
      'Conscientiousness',
      'Emotional Stability',
      'Intellect/Imagination'
    ],
    values : []
  }
  
  handleSelect = (e, answer, index) => {
    this.setState({
        questions : this.state.questions.map(q => {
            if(this.state.questions.indexOf(q) === index)
                q.answer = answer
            return q
        })
    })
  }

  componentDidMount(){
    this.setState({
      questions: this.state.questions.map(q => {
        q.answer = Math.floor(Math.random() * 7) + 1
        return q
      })
    })
  }

  handleSubmit = () => {
    let values = [0,0,0,0,0]
    const p = [1,1.5,2,3,4,4.5,5]
    const n = p.reverse()
    this.state.questions.forEach( q => {
      values[q.factor - 1] += q.direction ? p[q.answer - 1] : n[q.answer - 1]
    })
    this.setState({
      values : values
    })
  }

  render() {
    return (
      <div
        id = "app"
      >
      <Router>
        <withRouter>
          <Route exact path="/" render = {() => (
            <div>
              <Navbar />   
              <Main questions={this.state.questions} handleSelect = {this.handleSelect} handleSubmit = {this.handleSubmit} />
            </div>
          )} />
        </withRouter>

        <Route path="/result" render = {() => (
          <div>
            <Navbar />   
            <Result values = {this.state.values} keys = {this.state.keys} />
          </div>
        )} />
      </Router>     
      </div>
    )
  }
}
