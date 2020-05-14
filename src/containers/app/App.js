import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './../../components/Button';
import Input from './../../components/Input';
import List from './../../components/List';

import { addTodo } from './../../store/actions/todo';

class App extends Component {
    state = {
        input: ''
    };

    handleOnClick = () => {
        console.log('Button was clicked');
        const { addTodo } = this.props;
        const { input } = this.state;

        addTodo(input);
    }

    handleOnChange = event => {
        this.setState({input: event.target.value});
    }

    render () {
        const { input } = this.state;
        const { todoList } = this.props;
        
        return (
            <>
                <List />
                <Input onChange={ (event) => this.handleOnChange(event) } value={ input }></Input>
                <Button onClick={ () => this.handleOnClick() } >Adicionar</Button>
            </>
        )
    }
}

const mapStateToProps = (state) => (
    {
        listTodo: state.todo
    }
)

export default connect(mapStateToProps, { addTodo})(App);