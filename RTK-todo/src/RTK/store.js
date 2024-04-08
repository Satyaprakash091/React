import {configureStore,createSlice} from '@reduxjs/toolkit'
const todoSlice=createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addToDo:(state,action)=>
        {
            state.push(action.payload)
        },
        deleteToDo:(state,action)=>
        {
            return state.filter((todo)=>todo.id!=action.payload)
        }
    }
})
export const {addToDo,deleteToDo}=todoSlice.actions
const store=configureStore({
    reducer:{
        todos:todoSlice.reducer
    }
})
export default store;