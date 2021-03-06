import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  handleDelete = (id) => {
    const filteredItems = this.props.testStore.items.filter(item => item.id !== id);
    this.props.onDeleteTask(filteredItems);
  }
  clearList = () => {
    this.props.onClearList();
  }
  handleEdit = (id) => {
    const filteredItems = this.props.testStore.items.filter(item => item.id !== id);
    const selectedItem = this.props.testStore.items.find(item => item.id === id);
    this.props.onChangeTask({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  }
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>to do input</h3>
            <ToDoInput />
            <ToDoList items={this.props.testStore.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          </div>
        </div>
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
      onDeleteTask: (items) => {
        dispatch({
          type: 'DELETE_TASK',
          payload: items,
        })
      },
      onChangeTask: (items) => {
        dispatch({
          type: 'CHANGE_TASK',
          payload: items,
        })
      },
      onClearList: () => {
        dispatch({
          type: 'CLEAR_LIST',
        })
      }
    }
  )
)(App);
