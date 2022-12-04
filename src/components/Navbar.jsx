import { Badge, Button } from "@material-ui/core";
import { Navigation, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link,useNavigation } from "react-router-dom";
import styled from "styled-components";
import CartContext  from "../contextProvider/CartContext";
import {mobile} from "../responsive"
const Container = styled.div`
    height:60px;
    ${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({padding:"10px 0px"})}
`;
const Left = styled.div` 
    flex:1;
    display:flex;
    align-items:center; 
`;
const Language = styled.div`
    font-size:14px;
    cursor:pointer;
    ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
    display:flex;
    align-items:center; 
    border:1px solid lightgray;
    margin-left:25px;
    padding:5px;
`;
const Input = styled.input`
border:none;
${mobile({width:"50px"})}
`;
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center; 
    justify-content:flex-end;
    ${mobile({ flex:2,justifyContent:"center"})}
`;

const Center = styled.div`
flex:1;
text-align:center;
`;
const Logo = styled.h1`
color:black;
font-weight:bold;
${mobile({fontSize:"24px"})}
`;
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px",marginLeft:"10px"})}
`;
const Navbar = () => {
    const {cartProduct}= useContext(CartContext);
    const navigation=useNavigation();
    const [LoginStatus,setLoginStatus]=useState('')
    const [LoginMember,setLoginMember]=useState('')
    useEffect(()=>{
        func();
    },[])
    const func=()=>{
        console.log(localStorage.getItem('loginStatus'))
        setLoginStatus(localStorage.getItem('loginStatus'))
        setLoginMember(localStorage.getItem('loginMember'))
    }
    const logout=()=>{
        
        localStorage.setItem('loginStatus',false)
        localStorage.setItem('loginMember','')
        setLoginMember('')
        setLoginStatus(false)        
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    {/* <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color:"gray",fontsize:14}}/>
                    </SearchContainer> */}
                </Left>
                <Link to='/' style={{color:'black',textDecoration:'none'}}><Center><Logo>PINKPANDAS.</Logo></Center></Link>
                <Right>
                    {LoginMember==''?<Link to='/register' style={{color:'black',textDecoration:'none'}}><MenuItem>REGISTER</MenuItem></Link>:null}
                    {LoginMember=='admin' && LoginStatus?<Link to='/adminportal' style={{color:'black',textDecoration:'none'}}><MenuItem>Admin Portal</MenuItem></Link>:null}
                    {LoginMember=='customer' && LoginStatus? <Link  to='/viewmyorder' style={{color:'black',textDecoration:'none'}}><MenuItem>View My Orders</MenuItem></Link>:null}
                   {LoginMember=='customer' && LoginStatus? <MenuItem onClick={logout}>Logout(Customer)</MenuItem> :
                   LoginMember=='admin'?null:<Link to='/login' style={{color:'black',textDecoration:'none'}}><MenuItem onClick={logout}>SIGN IN AS CUSTOMER</MenuItem></Link>}
{
                   LoginMember=='admin' && LoginStatus? <MenuItem onClick={logout}>Logout(Admin)</MenuItem>:
                   LoginMember=='customer' && LoginStatus?null:<Link to='/admin' style={{color:'black',textDecoration:'none'}}><MenuItem>LOG IN AS ADMIN</MenuItem></Link>
}
                   {(LoginMember=='customer' && LoginStatus) ?<Link to='/cart' style={{color:'black',textDecoration:'none'}}>
                    <MenuItem>
                        <Badge badgeContent={cartProduct.length} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </Link> :null}
                </Right>
            </Wrapper>
        </Container>

    )
}

export default Navbar