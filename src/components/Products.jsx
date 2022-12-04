import  styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';
import {mobile} from "../responsive";
import { useEffect,useState } from 'react';
const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    flex-wrap:wrap;
    ${mobile({display:"none"})}
`;

const Products = () => {
  const [products,setproducts]=useState([])
  useEffect(()=>{
    func()
  },
  []
  )
  const func=()=>{
    fetch("http://localhost:8000/getproduct",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
      }
    } )
    .then(response=>response.json())
    .then(res=>{
      console.log(res)
      setproducts(res)
    }
    )
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <Container>
        {products.map((item,index)=>(
            <Product key={index+1} item={item} />
        ))}
    </Container>
  )
}

export default Products