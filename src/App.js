import React, { Component } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";

class App extends Component {
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>to do input</h3>
            <ToDoInput />
            <h3 className='text-capitalize text-center'>to do list</h3>
            <ToDoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
