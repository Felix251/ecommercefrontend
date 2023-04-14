import React from 'react'
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import HeaderInfo from '../../components/HeaderInfo';
import DiscountBox from '../../components/DiscountBox';
import Filters from '../../components/Filters';
import Product from '../../components/Product';
import sanGold from '../../assets/assets__default_upload_bucket.png'
function Accueil() {
  return (
    <Container>
        <DiscountBox/>
        <Filters/>
        <StyledHeadphones>
            <h1>Headphones For You!</h1>
            <Contenaire>
                <Product name='Wireless Earbuds, IPX8' note={5} price={89} image={sanGold} details='A perfect balance of high-fidelity audio' isAddedToCart={false}/>
                <Product name='Wireless Earbuds, IPX8' note={5} price={89} image={sanGold} details='A perfect balance of high-fidelity audio' isAddedToCart={true}/>
                <Product name='Wireless Earbuds, IPX8' note={5} price={89} image={sanGold} details='A perfect balance of high-fidelity audio' isAddedToCart={false}/>
                <Product name='Wireless Earbuds, IPX8' note={5} price={89} image={sanGold} details='A perfect balance of high-fidelity audio' isAddedToCart={false}/>
                <Product name='Wireless Earbuds, IPX8' note={5} price={89} image={sanGold} details='A perfect balance of high-fidelity audio' isAddedToCart={false}/>
            </Contenaire>
        </StyledHeadphones>
    </Container>
  )
}

export default Accueil;
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;
const Contenaire = styled.h1`
    display: flex;
    flex-wrap: wrap;
`;
const StyledHeadphones = styled.div`
    width: 75%;
`;