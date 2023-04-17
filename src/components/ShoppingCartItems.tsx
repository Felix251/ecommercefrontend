import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import DeliveryInfo from './DeliveryInfo'
import { useGetProductsQuery } from '../services/api/products';
import OrderSummery from './OrderSummery'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function ShoppingCartItems() {
    // const { data = [], isLoading} = useGetProductsQuery();
    // const shoppingCartItems = data.filter((product) => product.isAddedToCart == true);
    const shoppingCartItems = useSelector((state: RootState) => state.cartItems.products);
    const numberOfShoppingCartItems = useSelector((state: RootState) => state.cartItems.nextId);
    const total = shoppingCartItems.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.quantity;
      }, 0);
      
  return (
    <Container>
        <h3>Review item and Shipping</h3>
        <StyledCartItems>
            {shoppingCartItems.length > 0 ? 
                shoppingCartItems.map((produit) => (<ShoppingCartItem key={produit.id} id={produit.id} name={produit.name} price={produit.price} image={produit.image} details={produit.details} quantity={produit.quantity} note={produit.note} />))
            :
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'30px'}}>
                    <img src={require('../assets/box.png')} style={{width:'200px', height:'200px'}}/>
                    Your cart is currently empty
                </div>
            }    
            
        </StyledCartItems>
        <StyledTotalPrice>
            
                Sous-total ({numberOfShoppingCartItems - 1} articles): {total} €
            
        </StyledTotalPrice>
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    flex-direction: column; 
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px 20px ;
    margin: 15px;
`;
const StyledCartItems = styled.div`
    
`;
const StyledTotalPrice = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
`;