import React from 'react';
import './CreateQuestion.scss';


class CreateQuestion extends React.Component {
    render() {
        const { categories, createQuestion } = this.props;
        return(
            <div className="create-question-form">
                <label className="create-question-form__label">
                    Seleccionar categoríaass:
                </label>
                <select className="create-question-form__dropdown" 
                    id="categoryDropdownId">
                {categories.map( ( category, index ) => (
                    <option 
                    value={ `${category}` }
                    key={ index }>
                        {category}
                    </option>
                ))}
                </select>

                <label className="create-question-form__label">
                    Pregunta:
                </label>
                <input className="create-question-form__input" 
                    type="text" 
                    id="questionId" 
                    maxLength="50">
                </input>

                <label className="create-question-form__label">
                    Respuesta:
                </label>
                <textarea className="create-question-form__input" 
                    type="text" 
                    id="answerId">
                </textarea>

                <label className="create-question-form__label">
                    Nivel:
                </label>
                <input className="create-question-form__input" 
                    type="text" 
                    id="levelId">
                </input>

                <button className="create-question-form__button"
                    onClick={ createQuestion }>
                        Enviar
                </button>
            </div>
        )
    }
}

export default CreateQuestion;