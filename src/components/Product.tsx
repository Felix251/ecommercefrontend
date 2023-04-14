import React, {FC} from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { BsStar } from 'react-icons/bs';

interface ProductProps {
    name: string,
    price: number,
    image: any,
    details: string,
    note: number
    isAddedToCart: boolean
}
const Product: FC<ProductProps> = ({name, price, image, details, note, isAddedToCart}) => {
    const StyledButton =styled.button`
    margin-top: 2px;
    padding: 8px 10px;
    width: 50%;
    border-radius: 30px;
    border: 1px solid black;
    cursor: pointer;
    ${props => isAddedToCart ? `
        
        color: white;
        background-color: #023D29;
   `: 
   `
        border: 1px solid black;
        background-color: #fff
   `}
    `;
  return (
    <Container>
        <ProductBox>
            <Image src={image}  />
            <AiOutlineHeart size={20} style={{position: 'absolute', right: '10px', top:'10px', backgroundColor:'white', padding:'3px'}}/>
        </ProductBox>
        <StyledTitle>
            <span>{name}</span>
            <span><sup><BiDollar/></sup>{price}<sup style={{fontSize: '10px'}}>.00</sup></span>
        </StyledTitle>
        <StyledTitle color='t'>{details}</StyledTitle>
        <div style={{display:'flex', alignItems:'center'}}>
            <AiFillStar size={17}  style={{ fill: '#11A010' }}/>
            <AiFillStar size={17}  style={{ fill: '#11A010' }}/>
            <AiFillStar size={17}  style={{ fill: '#11A010' }}/>
            <AiFillStar size={17}  style={{ fill: '#11A010' }}/>
            <AiFillStar size={17}  style={{ fill: '#11A010' }}/>
            <StyledTitle>(121)</StyledTitle>
        </div>
        <StyledButton>Add to Cart</StyledButton>
    </Container>
  )
}

export default Product
const Container = styled.div`
    display: flex;
    flex-direction: column; 
    margin: 10px 10px;
`;
const Image = styled.img`
    width: 250px;
    height: 250px;
`;
const ProductBox = styled.div`
    background-color: #F6F6F6;
    position: relative;
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
// const StyledButton = styled.button`
//     padding: 8px 5px;
//     width: 40%;
//     border-radius: 30px;
//     border: 1px solid black
//     ${props => isAddedToCart ? `
//    font-weight: 400;
//    font-size: 13px;
//   `: ``}
// `;