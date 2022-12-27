import React  from 'react'
import './component.css'

export default function Result() {


    return(
        <>
        <div id='result-display'>
        <div id='result-word'>Result</div>
        <div id='result-div'>
            <div><h2>You need more practice</h2></div>
            <div><h1 style={{color:"blue"}}>Your Score is 20%</h1></div>
            <div id='result-data'>
                <div id='lines'>
                    <h3>Total number of questions</h3>
                    <h3>Number of attempted questions</h3>
                    <h3>Number of correct answers</h3>
                    <h3>Number of wrong answers</h3>
                </div>
                <div id='numbers'>
                   <h3>15</h3>
                   <h3>9</h3>
                   <h3>3</h3>
                   <h3>6</h3>
                </div>
            </div>
           
        </div>
        <div>
                <button style={{marginRight:"2vh"}}>Play Again</button>
                <button>Back to home</button>
            </div>
            </div>
        </>
    )

}