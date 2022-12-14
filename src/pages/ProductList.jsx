import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement" 
import Newsletter from "../components/Newsletter";
import Products from "../components/Products"
import Footer from "../components/Footer"
import { mobile } from "../responsive";
const Container=styled.div``;

const Filter=styled.div`
margin:20px;
${mobile({margin:"0px 20px",display:"flex",flexDirection:"none"})}
`;
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`;
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({marginRight:"opx"})}
`;
const Title=styled.div`
margin:20px;
`;
const Select=styled.select`
padding:10px;
margin-right:20px;
${mobile({margin:"10px 0px"})}
`;
const Option=styled.option``;
const ProductList = () => {
  return (
   <Container>
    <Navbar/>
    <Announcement/>
    <Title>Dresses</Title>
    <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select>
            <Option disabled select >Color</Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
    
        </Select>
        <Select>
            <Option disabled select >Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        <Select>
            <Option selected >Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price(desc)</Option>
        </Select>
        </Filter>
        
    </FilterContainer>
    <Products/>
    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default ProductList