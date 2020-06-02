import React from 'react';
import answers from '../../api/answers';
import Header from '../header/Header';
import Home from '../home/Home';
import Quizform from '../quizform/Quizform';
import CreateQuestion from '../createquestion/CreateQuestion';

class App extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            answers: [],
            categories: [ "geografia", "historia", "deporte", "ciencia", "literatura" ],
            levels: [ "1", "2", "3"],
            showCreateQuizForm: false,
            showHomeForm:true,
            showQuizform: false,
            questionsFilter: []
        }

        this.getAnswers = this.getAnswers.bind(this);
        this.getValue = this.getValue.bind(this);
        this.finalizeQuiz = this.finalizeQuiz.bind(this);
        this.createQuestion = this.createQuestion.bind(this);
        this.showCreateQuestionForm = this.showCreateQuestionForm.bind(this);
    }

    componentDidMount() {
        this.getAnswers();
    }

    render() {
        return(
            <div>
                <Header/>
                { this.state.showHomeForm ? 
                    <Home 
                        getValue={ this.getValue } 
                        categories={ this.state.categories } 
                        levels={ this.state.levels } 
                        showCreateQuestion={ this.showCreateQuestionForm }
                    /> 
                    : null}
                {this.state.showCreateQuizForm ? 
                    <CreateQuestion 
                        createQuestion={ this.createQuestion }
                        categories={ this.state.categories }
                    /> 
                    : null}
                { this.state.showQuizform ? 
                    <Quizform 
                        questionsFilter={ this.state.questionsFilter } 
                        finalizeQuiz={ this.finalizeQuiz }
                    />
                    : null}
            </div>
        );
    }

    getAnswers() {
        answers.get( '/pregunta' )
           .then( response => 
                this.setState({
                    answers: response.data.preguntas
            }))
    }

    async getValue( event ) {
        event.preventDefault();
        let checkboxes = document.getElementById( "categoriesFormId" ).categories;
        let categoriesChecked = [];

        for( let i = 0; i < checkboxes.length; i++ ) {
            if( checkboxes[i].checked ) {
                categoriesChecked.push( checkboxes[i].value );
            }
        }

        let newQuestions = [];

        for( let i = 0; i < this.state.answers.length; i++ ) {
            for( let j = 0; j < categoriesChecked.length; j++ ) {
                if( this.state.answers[i].categoria === categoriesChecked[j] ){
                        newQuestions.push( this.state.answers[i] );
                }
            }
        }

        newQuestions.sort( function( a, b ) {
            if( a.nivel < b.nivel ) {
                return -1;
            }
            if( a.nivel > b.nivel ) {
                return 1;
            }
            return 0;
        });

        let newQuestionsFilter = [ ...this.state.questionsFilter ];
        newQuestionsFilter = newQuestions;
        
        this.setState( prevState => ({
            showQuizform: !prevState.showQuizform,
            showHomeForm: !prevState.showHomeForm,
            questionsFilter: newQuestionsFilter
        }));

    } 

    finalizeQuiz() {
        this.setState( prevState => ({
            showHomeForm: !prevState.showHomeForm,
            showQuizform: !prevState.showQuizform
        }))
    }

    showCreateQuestionForm() {
        this.setState( prevState => ({
            showHomeForm: !prevState.showHomeForm,
            showCreateQuizForm: !prevState.showCreateQuizForm
        }))
    }

    createQuestion() {
        let categoryDropdown = document.getElementById("categoryDropdownId");
        let catSelected = categoryDropdown.options[categoryDropdown.selectedIndex].value

        let newQuestion = document.getElementById("questionId").value;
        let newAnswer = document.getElementById("answerId").value;
        let newLevel = document.getElementById("levelId").value;
        
        let question = {
            pregunta: newQuestion,
            respuesta: newAnswer,
            categoria: catSelected,
            nivel: newLevel
        }
        
        this.postNewQuestion( question );

        this.setState( prevState => ({
            showHomeForm: !prevState.showHomeForm,
            showCreateQuizForm: !prevState.showCreateQuizForm
        }))

    }

    postNewQuestion( question ) {
        answers.post( '/pregunta', { question })
            .then( response => console.log(response.status));
    }
}

export default App;