import React from 'react'
import styled from 'styled-components';
import image from '../assets/image1.png'

export default function DiscountBox() {
  return (
    <Container>
        <Container2>
            <StyledTitle>Grab Upto 50% Off On Selected Headphone</StyledTitle>
            <StyledButton>Buy Now</StyledButton>
        </Container2>
        <Image src={image}  />
    </Container>
  )
}
const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 20px 70px;
    padding: 40px 40px 0px 40px;
    background-color: #FCF0E4;
`;
const Container2 = styled.div`
    width: 50%;
    /* background-color: #FCF0E4; */
`;
const StyledTitle = styled.h1`
    color: #023D29;
`;
const StyledButton = styled.button`
    padding: 10px;
    color: #fff;
    background-color: #023D29;
    border-radius: 60px;
    border: none;
    padding: 10px 20px;
`;
const Image = styled.img`
    width: 30%;
    /* height: 50%; */
`;