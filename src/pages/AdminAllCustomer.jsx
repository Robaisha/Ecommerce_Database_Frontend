import styled from 'styled-components';
import React from 'react'
import { mobile } from '../responsive';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
padding:20px;
width:40%;
background-color:white;
${mobile({ width: "75px" })}
`;
const Title = styled.h1`
font-size:24px;
font-weight:300;
`;
const Div = styled.div`
flex-wrap:wrap;
display:flex;
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`;
const Container = styled.div`
width:100vw;
height:100vh;
linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`;
const Button = styled.button`
width:40%
border:none;
border:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;

const AdminAllCustomer = () => {
  const [size,setproductsize]=useState("")
  const [price,setprice]=useState("")
  const [name,setname]=useState("")
  const [color,setcolor]=useState("")
  const [quantity,setquantity]=useState("")
  const [category,setcategory]=useState("")
  const [desc,setdesc]=useState("")
  const [customer,setcustomer]=useState([])
  const navigation=useNavigate();
  //Delete
  useEffect(()=>{func()},[])
  const func=()=>{
    let cust_id=localStorage.getItem("customerid")
    fetch("http://localhost:8000/getcustomers",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
      }
    //   body:JSON.stringify({
    //     id:cust_id
    //   })
    } )
    .then(response=>response.json())
    .then(res=>{
      console.log('==============>',res[0])
      setcustomer(res)
    }
    )
    .catch(err=>{
      console.log(err)
    })
  }
  const DeleteRow = async (id) => {
    console.log(id)
    fetch(`http://localhost:8000/deleteproduct/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
      
    })
      .then(response => response.json())
      .then(res => {
        alert(res.message)
        func();
      }
      )
      .catch(err => {
        console.log(err)
      })
  }
  const [open,setopen]=useState(false)
  const [updateProduct,setUpdateProduct]=useState({})
  //Update
  const updateValue=(id)=>{
     fetch(`http://localhost:8000/updateproduct/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        product_size:updateProduct.size,
        product_price:updateProduct.price,
        product_name:updateProduct.name,
        product_color:updateProduct.color,
        quantity:updateProduct.quantity,
        category_name:updateProduct.category,
        product_desc:updateProduct.desc
      })
    })
      .then(response => response.json())
      .then(res => {
        alert(res.message)
        setopen(false)
        func();
      }
      )
      .catch(err => {
        console.log(err)
      })
    
  }
  const UpdateRow = (item) => {
    console.log(item)
  setUpdateProduct({
    name:item.product_name,
    size:item.product_size,
    price:item.product_price,
    quantity:item.quantity,
    category:item.category_name,
    desc:item.product_desc,
    color:item.product_color,
    id:item.product_no
  });

    setopen(true)
   
  }
  return (
    <div style={{margin:20}}>
        <Title style={{marginBottom:20}}>All Customers</Title>
        <table >
  <thead>
    <tr style={{border: '1px solid'}}>
      <th style={{border: '1px solid',padding:5}}>Customer ID</th>
      <th style={{border: '1px solid',padding:5}}>Customer Name</th>
      <th style={{border: '1px solid',padding:5}}>Customer Phone</th>
      <th style={{border: '1px solid',padding:5}}>Customer Email</th>
      <th style={{border: '1px solid',padding:20}}>Customer Address</th>
      <th style={{border: '1px solid',padding:5}}>Customer No. of Orders</th>
    </tr>
   </thead>
   <tbody style={{border: '1px solid'}}>

        {customer.map((customers,index)=>{
            return(
            <tr key={index+2} >
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{customers.customer_id}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{customers.customer_name}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{customers.customer_phone_no}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{customers.customer_email}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{customers.customer_address}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{customers.OrderCount}</td>
               <td ><Button style={{marginRight:10,marginLeft:10}} onClick={()=>{navigation('/admincustomerorder', { state:  customers.customer_id  });}}>View Order Details</Button></td>
            </tr>
           ) 
          })}
     {/* <tr>
       <td>text2.1</td>
       <td>text2.2</td>
       <td>text2.3</td>
       </tr>
       <tr>
       <td>text3.1</td>
       <td>text3.2</td>
       <td>text3.3</td>
      </tr> */}
     
  </tbody>
</table>
      {open?(
        <div style={{marginTop:20,padding:10}}>
          <h2 style={{marginBottom:20}}>Updating Product with Product No: {updateProduct.id}</h2>
          <label style={{marginBottom:10}}>Name: </label>
        <input style={{marginBottom:10}} type="text" onChange={txt=>{setUpdateProduct({...updateProduct,name:txt.currentTarget.value})}} 
            value={updateProduct.name} placeholder="Name" />

       <br/>
       <label style={{marginBottom:10}}>Size: </label>
       <input style={{marginBottom:10}} type="text" placeholder="Size" value={updateProduct.size} onChange={txt=>{setUpdateProduct({...updateProduct,size:txt.currentTarget.value})}}/>
       <br/>
       <label style={{marginBottom:10}}>Price($): </label>
       <input style={{marginBottom:10}} type="text" placeholder="Price" value={updateProduct.price} onChange={txt=>{setUpdateProduct({...updateProduct,price:txt.currentTarget.value})}}/>
       <br/>
       <label style={{marginBottom:10}}>Quantity: </label>
       <input style={{marginBottom:10}} type="text" placeholder="Quantity" value={updateProduct.quantity} onChange={txt=>{setUpdateProduct({...updateProduct,quantity:txt.currentTarget.value})}}/>
       <br/>
       <label style={{marginBottom:10}}>Category: </label>
       <input style={{marginBottom:10}} type="text" placeholder="Category" value={updateProduct.category} onChange={txt=>{setUpdateProduct({...updateProduct,category:txt.currentTarget.value})}}/>
       <br/>
       <label style={{marginBottom:10}}>Description: </label>
       <input style={{marginBottom:10}} type="text" placeholder="desc" value={updateProduct.desc} onChange={txt=>{setUpdateProduct({...updateProduct,desc:txt.currentTarget.value})}}/>
       <br/>
       <label style={{marginBottom:10}}>Color: </label>
       <input style={{marginBottom:10}} type="text" placeholder="color" value={updateProduct.color} onChange={txt=>{setUpdateProduct({...updateProduct,color:txt.currentTarget.value})}}/>
       <br/>
       <input  style={{marginBottom:10,width:100,backgroundColor:'#009eec',color:'white',fontWeight:'600'}}type="submit" value="Update" onClick={()=>updateValue(updateProduct.id)}/>
       <br/>
      </div>
      ):null}
      
    </div>
  )
}

export default AdminAllCustomer;