import React, { Component } from 'react';
import {connect} from 'react-redux';

class ToDoInput extends Component {
    constructor()
    {
        super();
        this.state = {
            inputValue: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    addTask() {
        this.props.onAddTask(this.state.inputValue);
        console.log('task: ', this.state.inputValue);
        this.setState({inputValue: ''});
    }
    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.item,
        };

        const updatedItems = [...this.state.items, newItem];
        this.onUpdatedItems(updatedItems);
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
                            value={this.state.inputValue}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type='submit' className={this.state.editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"} >
                        {this.state.editItem ? "Edit Item" : "Add item"}
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(
    state => (
        {
            testStore: state,
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