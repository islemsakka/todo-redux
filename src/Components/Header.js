import React from 'react';
import {connect} from "react-redux"

const Header = (props) => {
    return ( <div className='box-add'>
    <div className='Dailytodo'>Daily ToDo Lists</div>
    <div className='Addtodo'> 
    <input className='input-add' placeholder='Add your ToDo' onChange={(e)=>{props.setItem(e.target.value)}}/>
    <button className='buttonadd' onClick={()=>props.Ajouter(props.item)}>ADD</button></div>
    

  </div> );
}



const mapDispatchToProps=(dispatch)=>{
    return {
     setItem:(input)=>{
        dispatch({type:'SET_ITEM',payload:{value:input,id:Math.random()}})
      
      },
      Ajouter:(value)=>{
          dispatch({type:'ADD_ITEM',value:value})
        
         
      }
      

    }
  
  }
  const mapStateToProps=(state)=>{
    return {
      item:state.input,
      todolist:state.todolist,
      
    }
  }
  


 
export default connect(mapStateToProps,mapDispatchToProps)(Header);


