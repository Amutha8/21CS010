import React,{useEffect,useState} from 'react'
import axios from'axios'
import './Home.css'
export default function Admin() {
    const[post,setpost]=useState([])
    const[productName,setproductName]=useState('')
    const[price,setprice]=useState(0)
    const[rating,setrating]=useState(0)
    const[discount,setdiscount]=useState(0)
    const[availability,setavailability]=useState('')

    useEffect(()=>
    {
        axios.get('http://localhost:3001/products')
        .then(res=>{setpost(res.data)})
        .catch(err=>{console.log(err)})
    })
    const handlesubmit=()=>
    {
        axios.post('http://localhost:3001/products',
        {
            "productName":productName,"price":price,"rating":rating,"discount":discount,"availability":availability})
            .then(res=>{console.log(res)})
           .catch(err=>{console.log(err)})

    }
    const handledelete=()=>
    {
        axios.delete(`http://localhost:3001/products/${productName}`)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        
    }
   
  return (
    <div className="place1">
        <h1>Add Product</h1>
      
      <br></br>
      <form className="form1" onSubmit={handlesubmit}>
        <br></br>
        <label>ProductName:</label>
        <input type='text' value={productName} onChange={(e)=>setproductName(e.target.value)}/><br></br><br></br>
        <label>Price:</label>
        <input type='text' value={price} onChange={(e)=>setprice(e.target.value)}/><br></br><br></br>
        <label>rating:</label>
        <input type='text' value={rating} onChange={(e)=>setrating(e.target.value)}/><br></br><br></br>
        <label>Discount:</label>
        <input type='text' value={discount} onChange={(e)=>setdiscount(e.target.value)}/><br></br><br></br>
        <label>Availability:</label>
        <input type='text' value={discount} onChange={(e)=>setavailability(e.target.value)}/><br></br><br></br>
        <button type='submit'>submit</button>
      </form>
      <br></br>
      <br></br>
      <table>
        <thead>
            <tr>
                <th>ProductName</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Discount</th>
            </tr>
        </thead>
        <tbody>
            {post.map(x=>(
                <tr>
                    <td>{x.productName}</td>
                    <td>{x.price}</td>
                    <td>{x.rating}</td>
                    <td>{x.discount}</td>
                   <td><button onClick={()=>handledelete(x.name)}>Delete</button></td>
                </tr>
                
            ))}
        </tbody>
      </table><br></br>
      
    </div>
  )
}

