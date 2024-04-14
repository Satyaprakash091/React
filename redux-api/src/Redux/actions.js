export const fetch_products_request="fetch_product_request"
export const fetch_products_success="fetch_product_success"
export const fetch_products_failure="fetch_product_failure"

export const fetchProductRequest=()=>({
   type:fetch_products_request
})
export const fetchProductSuccess=(products)=>({
    type:fetch_products_success,
    payload:products
})
export const fetchProductFailure=(error)=>({
    type:fetch_products_failure,
    payload:error
})
export const fetchProducts=()=>
{
    return async(dispatch)=>
    {
        dispatch(fetchProductRequest())
        try {
            const res=await fetch("https://fakestoreapi.com/products")
            const data=await res.json()
            dispatch(fetchProductSuccess(data))
        } catch (error) {
         dispatch(fetchProductFailure(error))   
        }
    }
}