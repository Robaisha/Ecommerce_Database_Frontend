import styled from 'styled-components';
import React,{useEffect,useState} from 'react'
import { mobile } from '../responsive';
import { Link,useNavigate, useNavigation } from 'react-router-dom'
const Wrapper = styled.div`
padding:20px;
width:25%;
background-color:white;
${mobile({width:"75px"})}
`;
const Title = styled.h1`
font-size:24px;
font-weight:300;
`;
const Form = styled.form`
flex-direction:column;
display:flex;
`;
const Div= styled.div`
flex-direction:column;
display:flex;
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0;
padding:10px;
`;

const Container = styled.div`
width:100vw;
height:100vh;
linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
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
margin-bottom:10px;
`;

const Link1 = styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`;
const Login = () => {
  const navigation=useNavigate();
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const Login=()=>{
  
  fetch(('http://localhost:8000/logincustomer'),{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body:JSON.stringify({
      email:email,
      password:password
    })
  }
  )
  .then(res => res.json())
  .then(res => {
    if (res.success===1){
      // console.log(res.result[0].customer_id)
      alert('User Logged in Successfully');
      localStorage.setItem('customerid',res.result[0].customer_id)
      localStorage.setItem('customername',res.result[0].customer_name)
      localStorage.setItem('customeremail',res.result[0].customer_email)
      localStorage.setItem('loginStatus',true)
      localStorage.setItem('loginMember','customer')
      navigation('/');
    }else{
      alert('Invalid Credentials');
    }
  })
  .catch(err => console.log(err))
}

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN AS CUSTOMER</Title>
        <Div>
          <Input onChange={txt=>setemail(txt.currentTarget.value)} required type="email" placeholder='email'></Input>
          <Input onChange={txt=>setpassword(txt.currentTarget.value)} required type="password" placeholder='password'></Input>
          <button onClick={Login}>LOGIN</button>
          <Link1>DO NOT REMEMBER THE PASSWORD?</Link1>
          <Link to="/register"><Link1 >CREATE A NEW ACCOUNT</Link1></Link>
        </Div>
      </Wrapper>
    </Container>
  )
}

export default Login