import styled from 'styled-components';
import React from 'react'
import { mobile } from '../responsive';
import { useState } from 'react';
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

const Admin = () => {
  const [size,setproductsize]=useState("")
  const [price,setprice]=useState("")
  const [name,setname]=useState("")
  const [color,setcolor]=useState("")
  const [quantity,setquantity]=useState("")
  const [category,setcategory]=useState("")
  const [desc,setdesc]=useState("")
  const navigation=useNavigate();
  const func = () => {
    fetch("http://localhost:8000/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        product_size:size,
        product_price:price,
        product_name:name,
        product_color:color,
        quantity:quantity,
        category_name:category,
        product_desc:desc
      })
    })
      .then(response => response.json())
      .then(res => {
        alert(res.message)
      }
      )
      .catch(err => {
        console.log(err)
      })
  }
  const func1 = () => {
    navigation("/adminallproducts")
   
  }

 
  return (
    <Container>
      <Wrapper>
        <Title>ENTER INFO TO ADD PRODUCT INTO DATABASE</Title>
        <Div>
          <Input onChange={text=>setproductsize(text.currentTarget.value)} required type="text" placeholder='Product Size (S,M,L)'></Input>
          <Input onChange={text=>setprice(text.currentTarget.value)} required type="text" placeholder='Product Price'></Input>
          <Input onChange={text=>setname(text.currentTarget.value)} required type="text" placeholder='Product Name'></Input>
          <Input onChange={text=>setdesc(text.currentTarget.value)} required type="text" placeholder='Product description'></Input>
          <Input onChange={text=>setcolor(text.currentTarget.value)} required type="text" placeholder='Product Color'></Input>
          <Input onChange={text=>setquantity(text.currentTarget.value)} required type="text" placeholder='Quantity'></Input>
          <Input onChange={text=>setcategory(text.currentTarget.value)} required type="text" placeholder='Category Name'></Input>
        <Button style={{marginTop:10}} onClick={func}>ADD PRODUCT{'   '}</Button>
          <Button style={{marginLeft:20,marginTop:10}} onClick={()=>navigation('/adminallproducts')}>SEE ALL PRODUCTS</Button>
          <Button style={{marginTop:60,marginLeft:220,height:40}} onClick={()=>navigation('/adminallcustomer')}>SEE ALL CUSTOMER INFO{'   '}</Button>
        </Div>
      </Wrapper>
      
    </Container>
  )
}

export default Admin