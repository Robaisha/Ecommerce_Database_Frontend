import styled from 'styled-components';
import React from 'react'
import { mobile } from '../responsive';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
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

const Register = () => {
  const navigation = useNavigate();
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [phone,setphone]=useState("")
  const [address,setaddress]=useState("")
  const func = () => {
    fetch("http://localhost:8000/postcustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        customer_name: name,
        customer_email: email,
        customer_password: password,
        customer_phone_no: phone,
        customer_address: address
      })
    })
      .then(response => response.json())
      .then(res => {
        alert(res.message);
        navigation('/login')
      }
      )
      .catch(err => {
        console.log('=========>',err)
      })
  }
  
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Div>
          <Input onChange={text=>setname(text.currentTarget.value)} required type="text" placeholder='username'></Input>
          <Input onChange={text=>setemail(text.currentTarget.value)} required type="email" placeholder='email'></Input>
          <Input onChange={text=>setpassword(text.currentTarget.value)} required type="password" placeholder='password'></Input>
          <Input onChange={text=>setphone(text.currentTarget.value)} required type="Phone NO" placeholder='Phone No'></Input>
          <Input onChange={text=>setaddress(text.currentTarget.value)} required type="Address" placeholder='Address'></Input>
          <Agreement>
            By creating an account,I consent to the processing of my parcel data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={func}>CREATE</Button>

        </Div>
      </Wrapper>
    </Container>
  )
}

export default Register