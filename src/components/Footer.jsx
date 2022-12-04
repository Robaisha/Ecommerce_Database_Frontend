import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../responsive';
const Container=styled.div`
display:flex;
${mobile({flexDirection:"column"})}
`;
const Left=styled.div`
flex:1;
display: flex;
flex-direction:column;
padding:20px;
`;

const Logo=styled.h1``;
const Desc=styled.p`
margin:20px 0px;
`;
const SocialContainer=styled.div`
display:flex;
`;
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right:20px;
`;

const Right=styled.div`
flex:1;
padding:20px;
${mobile({backgroundcolor:"#eee"})}
`;
const Title=styled.h3`
margin-bottom:30px;
`;
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display: flex;
flex-wrap:wrap;
`;
const ListItem=styled.li`
width:50%;
margin-bottom:10px;
`;
const Center=styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`;
const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;
const Payment=styled.img`
width:50%;
`;
const Footer = () => {
  return (
   <Container>
     <Left>
        <Logo>PINK.</Logo>
        <Desc>There are variety of casual and formals available </Desc>
    <SocialContainer>
     <SocialIcon color="385999">
        <a href='https://www.facebook.com' target='blank' style={{color:'white'}}><Facebook/></a>
    </SocialIcon>
    <SocialIcon color="E4405F">
    <a href='https://www.instagram.com' target='blank' style={{color:'white'}}><Instagram/></a>
    </SocialIcon>
    <SocialIcon color="55ACEE">
    <a href='https://www.twitter.com' target='blank' style={{color:'white'}}><Twitter/></a>
    </SocialIcon>
    </SocialContainer>
    </Left>
     <Center>
      <Title>
        Useful Links
      </Title>
      <List>
      <ListItem><Link to='/'>Home</Link></ListItem>
      <ListItem><Link to='/cart'>Cart</Link></ListItem>
        <ListItem><Link to='/productlist'>Product List</Link></ListItem>
        <ListItem><Link to='/login'>Login</Link></ListItem>

      </List>
     </Center>
     <Right>
      <Title>
        Contact
      </Title>
      <ContactItem>
        <Room style={{marginRight:"10px"}}/>622 Arbia Plane, South Townister 9800
      </ContactItem>
      <ContactItem>
       <Phone style={{marginRight:"10px"}}/>+92 4457993467
      </ContactItem>
      <ContactItem>
       <MailOutline style={{marginRight:"10px"}}/> contact@pink.dev
      </ContactItem>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
     </Right>
   </Container>

  )
}

export default Footer