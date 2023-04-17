import React from 'react'
import styled from 'styled-components';

export default function OrderSummery() {
  return (
    <Container>
      <h2>Order Summery</h2>  
    </Container>
  )
}
const Container = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px 20px ;
    margin: 15px;
`;


