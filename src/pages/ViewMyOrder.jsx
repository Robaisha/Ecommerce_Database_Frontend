import styled from 'styled-components';
import React from 'react'
import { mobile } from '../responsive';
import { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

const ViewMyOrder = () => {
  const [size,setproductsize]=useState("")
  const [price,setprice]=useState("")
  const [name,setname]=useState("")
  const [color,setcolor]=useState("")
  const [quantity,setquantity]=useState("")
  const [category,setcategory]=useState("")
  const [desc,setdesc]=useState("")
  const [order,setcustorder]=useState([])
  const navigation=useNavigate();
  const loc=useLocation();

  useEffect(()=>{func()},[])
  const func=()=>{
    let id=localStorage.getItem('customerid');
    fetch(`http://localhost:8000/getorderdetails/${id}`,{
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
      setcustorder(res)
    }
    )
    .catch(err=>{
      console.log(err)
    })
  }
  const updateStatus=(id)=>{
    fetch(`http://localhost:8000/confirmorder/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
      }})
    .then(response=>response.json())
    .then(res=>{
      alert(`Order Id: ${id} Confirmed`)
      func()
    }
    )
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <div style={{margin:20}}>
        <Title style={{marginBottom:20}}>My Orders</Title>
        <table >
  <thead>
    <tr style={{border: '1px solid'}}>
      <th style={{border: '1px solid',padding:5}}>S#</th>
      <th style={{border: '1px solid',padding:5}}>Customer ID</th>
      <th style={{border: '1px solid',padding:5}}>Order Id</th>
      <th style={{border: '1px solid',padding:5}}>Order Product No's</th>
      <th style={{border: '1px solid',padding:5}}>Order Product Quantity</th>
      <th style={{border: '1px solid',padding:5}}>Order Status</th>
      <th style={{border: '1px solid',padding:5}}>Order Payment Method</th>
      <th style={{border: '1px solid',padding:20}}>Total Amount</th>
    </tr>
   </thead>
   <tbody style={{border: '1px solid'}}>

        {order.map((orders,index)=>{
            return(
            <tr key={index+2} >
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{index+1}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{orders.customer_id}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{orders.order_detail_id}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{orders.product_no}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{orders.quantity}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{orders.status}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{orders.paymentmethod}</td>
               <td style={{border: '1px solid',textAlign:'center',padding:20,fontWeight:'500'}}>{orders.total_amount}</td>

            </tr>
           ) 
          })}
 
     
  </tbody>
</table>
      
      
    </div>
  )
}

export default ViewMyOrder;