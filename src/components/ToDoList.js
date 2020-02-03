import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    render() {
        return (
            <div>
                Hello from ToDoList!
                <ToDoItem />
            </div>
        );
    }
}

export default ToDoList;