import React,{Component}  from 'react'
import { Link } from 'react-router-dom'
import './component.css'
import { Questions } from '../resoures/questions'
import Result from './ResultComponent'
class Quiz extends Component{
    constructor(){
        super()
        this.state={
            questionNumber:0,
            correctAnswer:0,
            wrongAnswer:0,
            attempted:0
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
    handleOptionClick = (e)=>{
        this.setState({
            attempted:this.state.attempted+1
            
        })
       
        if(e.target.innerHTML===Questions[this.state.questionNumber].answer){
            this.setState({
                correctAnswer:this.state.correctAnswer+1,
            })
            if(this.state.questionNumber<14){
                this.setState({
                    questionNumber:this.state.questionNumber+1
                
                })
            }
            
            console.log('right: ',this.state.correctAnswer)
        }
        else
        this.setState({
            wrongAnswer:this.state.wrongAnswer+1,
            questionNumber:this.state.questionNumber+1

        })
        if(this.state.questionNumber<14){
            this.setState({
                questionNumber:this.state.questionNumber+1
                
            })
        }
    }
    render(){
    return(
        <>
        {
            this.state.questionNumber<14?        <div id='quiz-div'>
            <div>
                <h2>Questions</h2>
                <h4>{this.state.questionNumber+1} of {Questions.length}</h4>
                
                <h3>{Questions[this.state.questionNumber].question}</h3>
                <div id='option-button-div'>
                    <button className="option-button" onClick={this.handleOptionClick} >{Questions[this.state.questionNumber].optionA}</button>
                    <button className="option-button" onClick={this.handleOptionClick} >{Questions[this.state.questionNumber].optionB}</button>
                    <button className="option-button" onClick={this.handleOptionClick} >{Questions[this.state.questionNumber].optionC}</button>
                    <button className="option-button" onClick={this.handleOptionClick} >{Questions[this.state.questionNumber].optionD}</button>
                </div>
                <div id='bottom-div'>
                    <button id='prev-button' className='bottom' onClick={()=>this.goBack()}>Previous</button>
                    <button id='next-button' className='bottom' onClick={()=>this.goNext()}>Next</button>
                    <Link id='quit-button' className='bottom' onClick={()=>this.quit()} to='/results' >Quit</Link> 
                </div>
            </div>

        </div>:<Result correct={this.state.correctAnswer} attempted={this.state.attempted} />
        }

        
        </>
    )
    }

}
export default Quiz