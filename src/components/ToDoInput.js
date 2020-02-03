import React, { Component } from 'react';

class ToDoInput extends Component {
    render() {
        return (
            <div className='card card-body my-3'>
                <form>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary text-white'>
                                <i className='fas fa-book'/>
                            </div>
                        </div>
                        <input type='text' className='form-control text-capitalize' placeholder='Add a to do item'/>
                    </div>
                    <button type='submit' className='btn btn-block btn-primary mt-3'>Add item</button>
                </form>
            </div>
        );
    }
}

export default ToDoInput;