
const SetInput=(state='',action) =>{
    if (action.type==='SET_ITEM')
    {return state=action.payload}
   else return state
}
export default SetInput;
