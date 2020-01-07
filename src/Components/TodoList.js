import React from 'react';
import {connect} from "react-redux"


const ToDoList = (props) => {
    return (<div >
        {props.todolist.map((el,i)=><div key={i}className='added-item'><span>{el.value}</span><div><button onClick={()=>props.EditItem(el.id)}>Edit</button>
        <button onClick={()=>props.SupprimerItem(el.id)}>Supprimer</button></div></div>)}
        
    </div> );
}
const mapDispatchToProps=(dispatch)=>{
    return {
        SupprimerItem:(id)=>{
            dispatch({type:'SUPP_ITEM',value:id})
        },
        EditItem:(id)=>{
            var promp = prompt("Please enter your new item", "item");
            dispatch({type:'EDIT_ITEM',value:{item:promp, id:id}})
        }
    }
}
const mapStateToProps=(state)=>{
    return {
     
      todolist:state.todolist,
      
    }
  }

 
export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);