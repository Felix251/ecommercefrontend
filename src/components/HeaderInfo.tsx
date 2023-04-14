import React from 'react'
import styled from 'styled-components';
import { FiPhone, FiChevronDown } from "react-icons/fi";

export default function HeaderInfo() {
  return (
    <Container>
        <div>
            <FiPhone/>
            +001234567890
        </div>
        <div>
            <Span> Get 50% on selected item </Span>
            |
            <Span>Shop Now</Span>
        </div>
        <div>
            <Span>Eng <FiChevronDown/></Span>
            <Span>Location <FiChevronDown/></Span>
        </div>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    height: 20%;
    padding: 10px ;
    display: flex;
    justify-content: space-around;
    background-color: #023D29;
    color: #fff;
    font-size: 13px;
    align-items: center;
`;
const Span = styled.span`
    margin-left: 10px;
    margin-right: 10px;  
`;

