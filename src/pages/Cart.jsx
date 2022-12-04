import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import { Add, Navigation, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from "react";
import  CartContext  from "../contextProvider/CartContext";
const Container = styled.div`
`;
const Wrapper = styled.div`
padding:20px;
${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`;
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props => props.type === "failed" && "none"};
background-color:${props => props.type === "filled" ? "black" : "transparent"};
color:${props => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin: 0px 10px;
`;
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
flex:3;

`;
const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
flex:2;
display:flex;
`;
const Image = styled.img`
width:200px;
`;
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props => props.color};
`;
const ProductSize = styled.span``;
const PriceDeatail = styled.div`
flex:1;
display:flex;
align-item:center;
justify-content:center;
flex-direction:column;
`;
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:2px;
`;
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
`;
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;

`;
const SummaryTitle = styled.h1`
font-weight:200;
`;
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props => props.type === "total" && "500"};
font-size:${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const Button = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
cursor:pointer;
`;
const Cart = () => {
    const {cartProduct,totalBill,clearCart} = useContext(CartContext);
    const [total,settotal]=useState()
    const navigation=useNavigate();
    useEffect(()=>{
        func_local();
    },[])
    const [card,setCard]=useState('');
    const [COD,setCOD]=useState('');
    const [cardNum,setCardNum]=useState('');
    const [cardPin,setCardPin]=useState('');
    const [cardExp,setCardExp]=useState('');
    const [payment,setPayment]=useState('');
    const [id,setCustomerid]=useState('');
    const [LoginMember,setLoginMember]=useState('');
    const [LoginStatus,setLoginStatus]=useState('');
    
    const func_local = async () => {
        const total_local=0;
        const data= await localStorage.getItem("customerid")
        const loginMember=await localStorage.getItem("loginMember")
        setLoginMember(loginMember);
        const loginStatus=await localStorage.getItem("loginMember")
        setLoginStatus(loginStatus);
        const data_name= await localStorage.getItem("customername")
        const data_email= await localStorage.getItem("customeremail")
        setCustomerid(data)
        // cartProduct.forEach(element => {
        //     console.log('============iiii===>',parseInt(element.product_price))
        //     total_local=total_local+parseInt(element.product_price);
        // });
        // settotal(total_local)
        settotal(totalBill());

    }
    const splitArray=()=>{
        let str='';
        cartProduct.forEach(element => {
            str+=(element.product_no +',');
        });
        str=str.slice(0,-1);
        console.log('=========================>',str);
        return str;
    }
    const AddTransaction = () => {
        console.log(splitArray());
        let prod_no=splitArray();
        if (card=='' && COD=='') {
            alert('Please Select Payment Method')
            return;
        }
        fetch("http://localhost:8000/addtransaction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                card_pin:cardPin,
                card_no:cardNum,
                card_expiry_date:cardExp,
                payment_method:payment,
                customer_id:id,
                product_no:prod_no,
                quantity:cartProduct.length,
                total_amount:total+5.90,
                status:'CONFIRMED',
            })
        })
            .then(response => response.json())
            .then(res => {
                alert(res.message)
                clearCart();
                settotal(0);
                navigation('/')
            }
            )
            .catch(err => {
                alert('error')
                console.log(err)
            })
            
    }
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Your bag</Title>
                <Top>
                    <Link to='/productlist'>
                        <TopButton>CONTINUE SHOPPING</TopButton></Link>
                    <TopTexts>
                        <TopText>Shopping Bag({cartProduct.length})</TopText>
                    </TopTexts>

                </Top>
                <Bottom>
                    <Info>
                       {cartProduct.length>0?cartProduct.map((item,index)=> 
                       <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName><b>Product:</b> {item.product_name}</ProductName>
                                    <ProductID><b>ID:</b> {item.product_no}</ProductID>
                                    <ProductColor color={item.product_color} />
                                    <ProductSize><b>Size:</b> {item.product_size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDeatail>
                                {/* <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer> */}
                                <ProductPrice>{'$'+item.product_price}</ProductPrice>
                            </PriceDeatail>
                        </Product>):null
                        }
                        <Hr />
                        {/* <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName><b>Product:</b> Hakura Tshirt</ProductName>
                                    <ProductID><b>ID:</b> 93872</ProductID>
                                    <ProductColor color="gray" />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDeatail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$40</ProductPrice>
                            </PriceDeatail>
                        </Product> */}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ {total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            {cartProduct.length>0?<><SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice></>:null}
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>$ Total</SummaryItemText>
                        {cartProduct.length>0?<SummaryItemPrice>${total+5.90} </SummaryItemPrice>: <SummaryItemPrice>${total} </SummaryItemPrice>}
                        </SummaryItem>
                        <SummaryItem>
                        <input  type="radio" onClick={()=>{setCard(true);setCOD(false);setPayment('CARD')}} id="demoCheckbox" name="checkbox" value="1"/>
                        <label for="demoCheckbox">Card Payment</label>
                        <input  type="radio" onClick={()=>{setCard(false);setCOD(true);setPayment('COD')}} id="demoCheckbox" name="checkbox" value="2"/>
                        <label for="demoCheckbox">Cash on Delivery (COD)</label>
                      {card? <div>

                        <input onChange={(txt)=>setCardNum(txt.currentTarget.value)} placeholder='Credit Card No'></input>
                        <input onChange={(txt)=>setCardPin(txt.currentTarget.value)} placeholder='CVV'></input>
                        <input onChange={(txt)=>setCardExp(txt.currentTarget.value)} placeholder='Expiry Date'></input>
                       </div>:null}
                        </SummaryItem>
                        
                    {cartProduct.length>0?    <Button  onClick={()=>AddTransaction()}>PLACE ORDER</Button>
                    :
                    <Button onClick={()=>alert('Cart is Empty')}>PLACE ORDER</Button>
                    }
                    
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart