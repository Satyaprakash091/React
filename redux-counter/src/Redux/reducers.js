import { combineReducers } from "redux";

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
            return stamountate;
    }
}
const reducer2=(state=initialState,action)=>
{
    switch(action.type)
    {
        case 'ADD':
            return{
                ...state,count2:state.count2+action.amount
            }
        case 'SUB':
            return{
                ...state,count2:state.count2-action.amount
            }
    }
}
const reducer=combineReducers({c1:reducer1,c2:reducer2})
export default reducer;
