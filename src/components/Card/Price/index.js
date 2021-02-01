import React from 'react';
import styled from 'styled-components';

const ProductPrice = styled.p `
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.02em;
    color: #000000;

`
const Dolar = styled.p ` 
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #000000;
    display: inline;
    margin-right: 4px;


`


class Price extends React.Component {
    render() {
        return(
            <ProductPrice>
               <Dolar>$</Dolar>
               2.50       
            </ProductPrice>
        );
    }
};
export default Price;