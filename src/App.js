import React, { Component } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: 0,
    item: '',
    editItem: false
  };
  handleChange = (e) => {
    this.setState({item: e.target.value});
  }
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>to do input</h3>
            <ToDoInput item={this.state.item} handleChange={this.handleChange} />
            <ToDoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
