import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import '../styles/Result.css'

export default function Result(props) {
    return (
        <div id="result">
            {
                props.keys.map((k,i)=>{
                    let percentage = (props.values[i]/50)*100
                    
                    return (
                    <div
                        style = {{width:'200px', height: '200px'}}
                    >
                            <CircularProgressbar value={percentage} text={`${percentage.toFixed()}%`} />
                            <p>{k}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}
