import React,{Suspense} from 'react'
import {useQuery} from '@tanstack/react-query' 
const fetchData=async()=>
{
    const res=await fetch('https://fakestoreapi.com/products')
    const data =await res.json()
    return data
}
const DataComponent = () => {
    const {data,isLoading,isError}=useQuery({queryKey:['data'],queryFn:fetchData})
    if(isLoading)
    {
        return <div>Loading...</div>
    }
    if(isError)
    {
        return <div>Error...</div>
    }
  return (
    <div>
        {data.map((d)=>(
            <div>{d.title}</div>
        ))}
    </div>
  )
}

export default DataComponent
