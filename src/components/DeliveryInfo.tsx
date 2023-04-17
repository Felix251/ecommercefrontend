import React from 'react'
import styled from 'styled-components';

export default function DeliveryInfo() {
  return (
    <Container>
      <h2> Delivery Information</h2> 
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
