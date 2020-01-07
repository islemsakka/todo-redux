import React, { Fragment } from 'react';
//import  {connect} from 'react-redux'
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';


const App =()=>{
  
    return ( <Fragment>
      <Header/>
      <TodoList/>
    </Fragment> );
  
}

export default App;