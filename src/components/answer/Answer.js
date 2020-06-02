import React from 'react';
import './Answer.scss';

const Answer = ( props ) => {
    const { respuesta } = props;
    return(
        <div>
            <label className="answer-wrapper">
                Respuesta: { respuesta }</label>
        </div>
    )
}

export default Answer;