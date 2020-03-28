import React, { Component } from 'react';
import {connect} from 'react-redux';

class ToDoInput extends Component {
    constructor()
    {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.props.onAddTask(e.target.value)
    }
    handleSubmit(e){
        e.preventDefault();

        const newItem = {
            id: this.props.testStore.id,
            title: this.props.testStore.item,
        };

        const updatedItems = [...this.props.testStore.items, newItem];
        this.props.onUpdatedItems(updatedItems);
    }
    render() {
        return (
            <div className='card card-body my-3'>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary text-white'>
                                <i className='fas fa-book'/>
                            </div>
                        </div>
                        <input 
                            type='text' 
                            className='form-control text-capitalize' 
                            placeholder='Add a to do item'
                            id='taskInput'
                            value={this.props.testStore.item}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type='submit' className={this.props.testStore.editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"} >
                        {this.props.testStore.editItem ? "Edit Item" : "Add item"}
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(
    state => (
        {
            testStore: state.tasksControl,
        }
    ),
    dispatch => (
        {
           onAddTask: (taskName) => {
               dispatch({
                   type: 'ADD_TASK',
                   payload: taskName,
               })
           },
           onUpdatedItems: (updated) => {
                dispatch({
                    type: 'UPDATE_TASK_LIST',
                    payload: updated
                })
           }
        }
    )
)(ToDoInput);