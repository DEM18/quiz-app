import React from 'react';
import './Home.scss';

class Home extends React.Component {
    render() {
        const { categories, getValue, showCreateQuestion } = this.props;
        return(
            <div className="home-form">
            <div className="home-form__wrapper-selection">
                <label className="home-form__label">Select category</label>
                <form id="categoriesFormId">
                { categories.map( ( category, index ) => (
                    <div key={ index }>
                        <input type="checkbox" 
                            id={ `${category}${index}` } 
                            name="categories" 
                            value={ `${category}` }
                            onChange={ this.onCheckboxChange }>
                        </input>
                        <label>{ category }</label>
                    </div>
                    ))}
                </form>
            </div>
            <button className="home-form__button" 
                id="startBtnId"
                type="button"
                onClick={ getValue }>
                    Comenzar
            </button>
            <button className="home-form__button" 
                type="button"
                onClick={ showCreateQuestion }> 
                    Crear pregunta
            </button>
            </div>
        )
    }
}

export default Home;