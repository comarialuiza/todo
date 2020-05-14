import React from 'react';
import { connect } from 'react-redux';

function List({ todoList }) {
    return (
        <ul>
            { todoList.map(todo => (
                <li key={ todo.id }>{ todo.name }</li>
            )) }
        </ul>
    );
}

const mapStateToProps = state => ({
    todoList: state.todo.list
})

export default connect(mapStateToProps)(List);