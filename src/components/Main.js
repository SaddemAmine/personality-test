import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import '../styles/Main.css'
import Answers from './Answers'

import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons'

export default class Main extends Component {
    state = {
        questions : this.props.questions
    }

    render() {
        return (
            <>
            <div
                id = "main"
            >
                <div 
                    id="questions"
                >
                    {this.state.questions.map((q, i) => 
                        (<div key = {i} className="question">
                            <p>{q.statement}</p>
                            <Answers qIndex = {i} chosenAnswer = {q.answer} handleSelect = {this.props.handleSelect} handleSubmit = {this.props.handleSubmit} />
                        </div>)
                    )}
                </div>
            </div>
            <center>
            
            <Link to='/result'>
            <Button onClick = {() => this.props.handleSubmit()} type="primary" shape="round" icon={<SendOutlined />} size="large"
                style = {{
                    marginBottom : "30px",
                    background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
                }}
            >
                Submit
            </Button>
            </Link>
            </center>
            </>
        )
    }
}
