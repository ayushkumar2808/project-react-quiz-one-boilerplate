import React  from 'react'
import './component.css'

export default function Quiz() {


    return(
        <>
        
        <div id='quiz-div'>
            <div>
                <h2>Questions</h2>
                <h4>1 of 15</h4>
                <h3>Which is the only mammal that can jump?</h3>
                <div id='option-button-div'>
                    <button className="option-button">Dog</button>
                    <button className="option-button">Elephant</button>
                    <button className="option-button">Goat</button>
                    <button className="option-button">Lion</button>
                </div>
                <div id='bottom-div'>
                    <button id='prev-button' className='bottom'>Previous</button>
                    <button id='next-button' className='bottom'>Next</button>
                    <button id='quit-button' className='bottom'>Quit</button>
                </div>
            </div>

        </div>
        
        </>
    )

}