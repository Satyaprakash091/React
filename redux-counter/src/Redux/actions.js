export const increment=()=>
{
    return{type:"INCR"}
}
export const decrement=()=>
{
    return{type:"DECR"}
}
export const add=()=>({
    type:"ADD",
    amount:200
})
export const subtract=()=>({
    type:"SUB",
    amount:200
})