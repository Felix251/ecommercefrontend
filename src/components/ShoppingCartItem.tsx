import React, { FC} from 'react'
import { useGetProductsQuery } from '../services/api/products';
import Product from './Product';
import styled from 'styled-components';
import { BiDollar } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../features/cartSlice';
import { MdClose } from "react-icons/md";

 interface ShoppingCartItemProps {
    id: string,
    name: string,
    price: number,
    image: string,
    details: string,
    note: number
};
const ShoppingCartItem: FC<ShoppingCartItemProps> = ({id, name, price, image, details, note}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeProductFromCart(id));
      };
  return (
    <Container>
        <Image src={image}  />
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
           <StyledTitle>{name}</StyledTitle>
          <StyledTitle color='forDetails'>{details}</StyledTitle>
        </div>  
        <StyledPrice>
            <span>
                <sup><BiDollar/></sup>{price}<sup style={{fontSize: '10px'}}>.00</sup>
            </span>
            <span style={{marginBottom:'10px', marginTop:'5px'}}>
                QTY : 1 
            </span>
            <StyledButton title='Supprimer'  onClick={handleDelete}><MdClose/></StyledButton>
        </StyledPrice>
    </Container>
  )
}
export default  ShoppingCartItem;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 30px 10px;
    box-shadow: 1px 1px 5px;
    position: relative;
`;
const Image = styled.img`
    width: 180px;
    height: 180px;
`;
const StyledPrice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledButton = styled.button`
   position: absolute;
   top: 5px; 
   right: 5px;
   border-radius: 100%;
   border: none;
   display: flex;
    justify-content: center;
    align-items: center;
   cursor: pointer;
`;
const StyledTitle = styled.span`
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    ${props => props.color && `
   font-weight: 400;
   font-size: 13px;
  `}
`;

