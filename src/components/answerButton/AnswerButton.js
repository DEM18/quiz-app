import React from 'react';


const AnswerButton = ( props ) => {
    const { showAnswer } = props;
    return(
        <button className="question-form__button" 
            type="submit"
            onClick={showAnswer}>
            Ver Respuesta
        </button>
    )
}

export default AnswerButton;