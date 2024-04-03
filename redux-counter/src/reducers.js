const initialState={
    count:0,
    count2:100
}
const reducer1=(state=initialState,action)=>
{
    switch(action.type)
    {
        case 'INCR':
            return{
                ...state,count:state.count+1
            }
        case 'DECR':
            return{
                ...state,count:state.count-1
            }
        default:
            return state;
    }
}
export default reducer1;