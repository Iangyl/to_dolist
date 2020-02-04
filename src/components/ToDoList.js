import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return (
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'>To Do List</h3>
                {
                    items.map(item => {
                        return(
                            <ToDoItem 
                                key={item.id} 
                                title={item.title} 
                                handleDelete={() => handleDelete(item.id)}
                                handleEdit={() => handleEdit(item.id)}
                            />
                        );
                    })
                }
                <button type='button' className='btn btn-danger btn-block text-capitalize mt-5' onClick={clearList}>clear list</button>
            </ul>
        );
    }
}

export default ToDoList;