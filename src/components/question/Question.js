import React from 'react';
import './Question.scss';

class Question extends React.Component {
    render() {
        const { pregunta } = this.props;
        return(
            
                <label className="question-form__label question-form__label--question">
                    { pregunta }
                </label>
      
        )
    }
}

export default Question;