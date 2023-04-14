import React, { FC } from 'react'
import { FiArrowDown, FiChevronDown } from 'react-icons/fi';
import { BsFilter } from "react-icons/bs";
import styled from 'styled-components';

export default function Filters() {
    const filtres: string[] = ["Headphone Type", "Price", "Material", "Offer", ]
    return (
        <Container>
            <StyledFilters>
                {filtres.map((filtre) => (<Filter text={filtre} icon={<FiChevronDown/>}/>))}
                <StyledFilter>
                    All Filters <BsFilter/>
                </StyledFilter>
                
            </StyledFilters>
            <StyledFilter color='no'>
                Sort by <FiChevronDown/>
        </StyledFilter>
        </Container>
  )
}

const Filter:FC<Filtre> = ({text, icon}) => (
        <StyledFilter>
                {text} {icon}
        </StyledFilter>
    );
const Container = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin: 20px 70px;
    /* padding: 40px 40px 0px 40px; */
    /* background-color: #FCF0E4; */
`;
const StyledFilter = styled.div`
    border-radius: 60px;
    background-color: #ECEEED;
    padding: 5px 10px;
    font-size: 13px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    border-color: #ECEEED;
    
    ${props => props.color && `
    background: #fff;
    border-color: 1px #ECEEED;
    box-shadow: 3px 3px 5px #ECEEED;
  `}
`;
const StyledFilters = styled.div`
    display: flex;
`;
interface Filtre  {
    text:string ,
    icon: any
 }