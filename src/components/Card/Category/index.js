import React from 'react';
import styled from 'styled-components';

const ProductCategory = styled.p `
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #000000;

`
class Category extends React.Component {
    render() {
        return(
            <ProductCategory>
               Vegetables          
            </ProductCategory>
        );
    }
};
export default Category;