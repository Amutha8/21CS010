import React,{useEffect,useState} from 'react'
import axios from'axios'
import './Product.css'
export default function Product() {
    const[post,setpost]=useState([])

    useEffect(()=>
    {
        axios.get('http://localhost:3001/products')
        .then(res=>{setpost(res.data)})
        .catch(err=>{console.log(err)})
    })
   
  return (
   <div>
      <div className="flex-container">
      {
        post.map(x=>(<div className="flex">
        <img src={x.image} width={150} height={150}/><br></br><br></br>
        <h1>{x.productName}</h1><br></br>
        <h1>{x.price}</h1><br></br>
        <h1>{x.rating}</h1><br></br>
        <h1>{x.discount}</h1><br></br>
        <h1>{x.availablity}</h1><br></br>
        </div>))
      }
      <br></br>
      </div>
      </div>
    
  )
}
