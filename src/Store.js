
import { createStore, combineReducers } from 'redux'
import SetInput from './Reducers/SetInputReducer'
import ToDoListReducer from "./Reducers/TodoListReducer"

const Store=createStore(combineReducers({
    input:SetInput ,
    todolist:ToDoListReducer
}))


export default Store