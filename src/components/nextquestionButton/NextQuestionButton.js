import React from 'react';

const NextQuestionButton = ( props ) => {
    const { showNextQuestion } = props;
    return(
        <button className="question-form__button " 
            type="submit"
            onClick={ showNextQuestion }>
            Próxima pregunta
        </button>
    )
}

export default NextQuestionButton;