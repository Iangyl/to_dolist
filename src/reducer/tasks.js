import uuid from "uuid";

const initialState = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
};

export default function tasksControl(state = initialState, action){
    if(action.type === 'ADD_TASK'){
        return {
            ...state,
            item: action.payload
        }
    }
    else if (action.type === 'CHANGE_TASK'){
        return state = action.payload;
    }
    else if (action.type === 'DELETE_TASK'){
        return {
            ...state,
            items: action.payload
        }
    }
    else if (action.type === 'CLEAR_LIST'){
        return {
            ...state,
            items: []
        }
    }
    else if (action.type === 'UPDATE_TASK_LIST'){
        return{
            ...state,
            items: action.payload
        }
    }
    else if (action.type === 'UPDATE_BUT'){
        return {
            ...state,
            editItem: action.payload
        }
    }
    return state;
}