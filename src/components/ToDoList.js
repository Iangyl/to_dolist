import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    render() {
        return (
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'>To Do List</h3>
                <ToDoItem />
                <button type='button' className='btn btn-danger btn-block text-capitalize mt-5'>clear list</button>
            </ul>
        );
    }
}

export default ToDoList;