import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import CartContext from "../contextProvider/CartContext";
import { useContext } from "react";
import { useState } from "react";
const Container = styled.div``;
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding:"10px"})}
`;
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})}
`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height:"40vh"})}
`;
const Title = styled.div`
font-weight:500;
`;
const Desc = styled.p`
margin:20px 0px;
`;
const Price = styled.span`
font-weight:100;
font-size:40px;
`;
const Filter=styled.div`
display:flex;
align-items:center;
`;
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;
${mobile({width:"100%"})}
`;
const FilterTitle=styled.span`
font--size:20px;
font-weight:200px;
`;
const FilterSize=styled.select`
padding:5px;
margin-left:10px;
`;
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${(props)=>props.color};
margin:0px 5px;
cursor:pointer;
`;
const FilterSizeOption=styled.option``;
const AddContainer=styled.div`
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
${mobile({width:"100%"})}
`;
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;

`;
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`;
const Button=styled.button`
padding:15px;
border:1px solid teal;
background-coor:white;
cursor:pointer;
&:hover{
    background-color:#f8f4f4 ;
}
`;
const Product = (props) => {
    const loc=useLocation();
    console.log(loc.state.item)
    const [stock,setStock]=useState();
    const [quantity,setQuantity]=useState(loc.state.item.quantity)
    const {addProduct}=useContext(CartContext);
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title style={{fontSize:30}}>{loc.state.item.product_name}</Title>
                    <Desc>{loc.state.item.product_desc}</Desc>
                    <Price>{'$'+loc.state.item.product_price}</Price>
                    <Desc>{'Color: '+loc.state.item.product_color}</Desc>
                    <Desc>{'Size: '+loc.state.item.product_size}</Desc>
                    <Desc>{'Quantity Available: '+quantity}</Desc>
                    
                    <AddContainer>
                        {/* <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer> */}
                        { quantity==0?<Button disabled>Out Of Stock</Button>:<Button onClick={()=>{
                            if (quantity>0){setQuantity(quantity-1)};addProduct(loc.state.item)}}>ADD TO CART</Button>}
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Product