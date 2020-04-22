import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json')

class Quiz extends React.Component{
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }
  render() {
    return (
      <div >
        <QuizEnd quiz_question={quizData.quiz_questions[this.state.quiz_position - 1] = quizData.quiz_questions.length}/>
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
      </div>
    )
  }
}

export default Quiz
