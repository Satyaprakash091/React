const initialState=
{
    todos:[]
}
const toDoReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "ADD":
            return {...state,todos:[...state.todos,{
                id:action.id,
                text:action.data
            }]}
        case "DELETE":
            return{...state,todos:state.todos.filter((t)=>t.id!=action.id)}
        default:
            return state;
    }
}
export default toDoReducer