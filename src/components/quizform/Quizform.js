import React from 'react';

import Answer from '../answer/Answer';
import AnswerButton from '../answerButton/AnswerButton';
import FinalizeQuiz from '../finalizeQuiz/FinalizeQuiz';
import NextQuestionButton from '../nextquestionButton/NextQuestionButton';
import Question from '../question/Question';

class Quizform extends React.Component {
    constructor( props ){ 
        super( props );

        this.state = {
            showAnswer : false,
            position: 0
        }

        this.showAnswer = this.showAnswer.bind(this);
        this.showNextQuestion = this.showNextQuestion.bind(this);
    }


    render() {
        const { questionsFilter, finalizeQuiz } = this.props;
        let questionsFilterLenght = questionsFilter.length;
        let button ;

        if ( this.state.position < ( questionsFilterLenght - 1 ) ) {
            button = <NextQuestionButton showNextQuestion={ this.showNextQuestion }/>
        } else {
            button = <FinalizeQuiz finalizeQuiz={ finalizeQuiz }/>
        }
        return(
            <div className="quiz-form">
                <div className="question-form"> 
                    <Question 
                        pregunta={ questionsFilter[ this.state.position ].pregunta }
                    />
                    { this.state.showAnswer ? <Answer respuesta={ questionsFilter[ this.state.position ].respuesta } />: null}
                </div>
                <AnswerButton showAnswer={ this.showAnswer }/>
                { button }
            </div>
        )
    }
 
    showAnswer() {
        this.setState( prevState => ({
            showAnswer: !prevState.showAnswer
        }))
    }

    showNextQuestion() {
        let newPosition = this.state.position;
        newPosition = newPosition + 1;

        this.setState({
            position: newPosition
        })

        this.setState( prevState => ({
            showAnswer: !prevState.position
        }))
    }
}

export default Quizform;