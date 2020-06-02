import React from 'react';

const FinalizeQuiz = ( props ) => {
    const { finalizeQuiz } = props;
    return(
        <button className="question-form__button " 
            type="submit"
            onClick={ finalizeQuiz }
            >
            Finalizar
        </button>
    )
}

export default FinalizeQuiz;