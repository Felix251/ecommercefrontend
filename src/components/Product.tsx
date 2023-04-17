import React, {FC, useEffect, useState} from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { useAddToCartMutation } from '../services/api/cart';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../features/cartSlice';
import { RootState } from '../store/store';

interface ProductProps {
    id: string
    name: string,
    price: number,
    image: string,
    details: string,
    note: number
};
const Product: FC<ProductProps> = ({id, name, price, image, details, note}) => {
    function renderStars() {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            i <= note ? (
              <AiFillStar key={i} size={17} style={{ fill: '#11A010' }} />
            ) : (
              <AiOutlineStar key={i} size={17} style={{ fill: '#000000' }} />
            )
          );
        }
        return stars;
      }
    const [isAddedToCart, setisAddedToCart] = useState(false);
    const shoppingCartItems = useSelector((state: RootState) => state.cartItems.products);
    useEffect(() => {
       
        if (shoppingCartItems.find((produit) => produit.id == id)) {
            setisAddedToCart(true)
        } else {
            setisAddedToCart(false)
        }
    })
    
    const StyledButton =styled.button`
    margin-top: 2px;
    padding: 8px 10px;
    width: 60%;
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
    const [update, { isLoading: isLoadingMutation }] = useAddToCartMutation();
    const dispatch = useDispatch()
    const addToCart = () => {
        // const updatedProduct = {
        //     id: id,
        //     name: name,
        //     price: price,
        //     image: image,
        //     details: details,
        //     note: note,
        //     isAddedToCart: !isAddedToCart
        //   };
      
        //   update(updatedProduct)
        //     .unwrap()
        //     .then(() => {})
        //     .catch(() => {});

        dispatch(addProductToCart({
                id: id,
                name: name,
                price: price,
                image: image,
                details: details,
                note: note,
                quantity: 1
              }));
    }
    const handleDelete = () => {
        dispatch(removeProductFromCart(id));
      };
      const handleCart = () => {
        if (isAddedToCart) {
            handleDelete()
        } else {
            addToCart()
        }
      }
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
        <div style={{ display: "flex", alignItems: "center" }}>
            {renderStars()}
            <StyledTitle>({121})</StyledTitle>
        </div>
        <StyledButton onClick={handleCart}> {isAddedToCart ? 'Remove from cart' : 'Add to Cart'}</StyledButton>
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