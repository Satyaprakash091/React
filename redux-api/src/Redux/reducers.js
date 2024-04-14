import { fetch_products_failure,fetch_products_success,fetch_products_request } from "./actions";

const initialState={
    loading:false,
    products:[],
    error:''
}
const productReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case fetch_products_request:
            return {...state,loading:true}
        case fetch_products_success:
            return {...state,loading:false,products:action.payload}
        case fetch_products_failure:
            return {...state,loading:false,error:action.payload}
        default:
            return state;
    }
}
export default productReducer