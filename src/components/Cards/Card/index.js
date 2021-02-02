import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import ProductName from './Name';
import Price from './Price';
import Buy from './Buy';


const CardItem = styled.div `
    background-color: #FFFFFF;
    min-height: 256px;
    width: 352px;
    border-radius: 24px;
    padding: 32px;
    margin: 24px 24px 24px 24px;

`
class Card extends React.Component {
    render() {
        return(
            <CardItem>
                <Category/>
                <ProductName/>
                <Price/>
                <Buy/>            
            </CardItem>
        );
    }
};
export default Card;