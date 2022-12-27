import React,{Component}  from 'react'
import './component.css'
import { Questions } from '../resoures/questions'
class Quiz extends Component{
    constructor(){
        super()
        this.state={
            questionNumber:0
        }
    }
    goNext(){
        if(this.state.questionNumber<14){
        this.setState({
            questionNumber:this.state.questionNumber+1
        
        })
    }
    }
    goBack(){
        if(this.state.questionNumber>0){
            this.setState({
                questionNumber:this.state.questionNumber-1
            })
        }
    }
    quit(){
        window.confirm("Are you sure you want to quit")
    }
    render(){
    return(
        <>
        
        <div id='quiz-div'>
            <div>
                <h2>Questions</h2>
                <h4>{this.state.questionNumber+1} of {Questions.length}</h4>
                <h3>{Questions[this.state.questionNumber].question}</h3>
                <div id='option-button-div'>
                    <button className="option-button">{Questions[this.state.questionNumber].optionA}</button>
                    <button className="option-button">{Questions[this.state.questionNumber].optionB}</button>
                    <button className="option-button">{Questions[this.state.questionNumber].optionC}</button>
                    <button className="option-button">{Questions[this.state.questionNumber].optionD}</button>
                </div>
                <div id='bottom-div'>
                    <button id='prev-button' className='bottom' onClick={()=>this.goBack()}>Previous</button>
                    <button id='next-button' className='bottom' onClick={()=>this.goNext()}>Next</button>
                    <button id='quit-button' className='bottom' onClick={()=>this.quit()}>Quit</button>
                </div>
            </div>

        </div>
        
        </>
    )
    }

}
export default Quiz