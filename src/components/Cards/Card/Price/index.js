import React from 'react';
import styled from 'styled-components';
import Dollar from './Dollar';
import Number from './Number';

const ProductPrice = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

class Price extends React.Component {
    render() {
        return(
            <ProductPrice>
                <Dollar/>
                <Number/>
            </ProductPrice>
        );
    }
};
export default Price;