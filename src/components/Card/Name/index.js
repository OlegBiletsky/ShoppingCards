import React from 'react';
import styled from 'styled-components';

const ProductName = styled.p`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: #000000;
`
class Name extends React.Component {
    render() {
        return(
            <ProductName>
               Onion       
            </ProductName>
        );
    }
};
export default Name;