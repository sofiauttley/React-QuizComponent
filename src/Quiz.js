import React, { Component } from 'react';

let quizData = require('./quiz_data.json')

class Quiz extends React.Component{
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }
  render() {
    return (
      <Quiz >
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
      </Quiz>
    )
  }
}

export default Quiz;
