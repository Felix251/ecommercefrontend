import React, {useState} from 'react'
import { FiChevronDown, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../store/store';

export default function Navbar() {
  const numberOfCartItems = useSelector((state: RootState) => state.cartItems.nextId);
    const [text, setText] = useState("");
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  const clearInput = () => {
    setText("");
  };

  return (
    <Container>
       <Link to='/' style={{textDecoration:'none', color:'black'}}>
         <Titre>ShopCart</Titre>
         </Link>
      <Contenaire>
        
            <span style={{display:'flex', alignItems:'center'}}>Categories <FiChevronDown/></span>
            <span>Deals</span>
            <span>What's new</span>
            <span>Delivery</span>
        <StyledInput className={"inputWithIcon"}>
        <Input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Search"
        />
         <Icon />
        </StyledInput>
        <div>
            <FiUser/> Account
        </div>
        <Link to='/cart' style={{textDecoration:'none', color:'black', position: 'relative'}}>
            <FiShoppingCart/>
            <span>Cart</span>
            <NumberOfCartItem>{numberOfCartItems -1}</NumberOfCartItem>  
        </Link>
      </Contenaire>
    </Container>
  )
}
const Container = styled.div`
    width: 90%;
    height: 20%;
    padding: 10px 80px ;
    display: flex;
    justify-content: center ;
    font-size: 13px;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`;
const Contenaire = styled.div`
    width: 70%;
    margin-left: 70px;
    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: space-around;
`;
const Titre = styled.h1`
    color  : #023D29;
`;
const NavElements = styled.div`
    display: flex;
    justify-content: space-between;
`;
const StyledInput = styled.div`
    color: #555;
    display: flex;
    padding: 2px;
    border: none ;
    border-radius: 50px;
    /* margin: 30px 0 30px; */
    background-color: #F6F7F9;
`;
const Input = styled.input`
  border: none;
  background: transparent;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: none;
  border-radius: inherit;
  outline: none;
`;
const Icon = styled.button`
  overflow: hidden;
  width: 40px;
  padding: 0;
  margin: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
  cursor: pointer;
  opacity: 0.7;
`;
const NumberOfCartItem = styled.span`
  position: absolute;
  background-color: red;
  color: white;
  width: 15px;
  height: 15px;
  font-size: 15px;
  z-index: 100;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -15px;
  right: -15px;
  padding: 3px;
`;
