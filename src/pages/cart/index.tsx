import React from 'react'
import ShoppingCartItems from '../../components/ShoppingCartItems'
import DeliveryInfo from '../../components/DeliveryInfo'
import OrderSummery from '../../components/OrderSummery'
import styled from 'styled-components'

export default function Cart() {
  return (
    <Container >
        <div style={{width:'50%'}}>
            <ShoppingCartItems/>
            <DeliveryInfo/>
        </div>
        <OrderSummery/>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;