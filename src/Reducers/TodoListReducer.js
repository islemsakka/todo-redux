const ToDoListReducer =(state=[],action)=>{
  
    if(action.type==="ADD_ITEM") {
        return ([...state,action.value])
    }
  else  if (action.type==="SUPP_ITEM"){
        return state.filter((e)=>e.id!== action.value )
    }
   else if (action.type==="EDIT_ITEM"){
       return state.map((e)=>{if((e.id===action.value.id)&&(action.value.item !=='')){e.value=action.value.item 
        return e}else{return e}})
   }
    else return state
}


export default ToDoListReducer