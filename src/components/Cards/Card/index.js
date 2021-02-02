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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const CardItemTop = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
const CardItemBottom = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


class Card extends React.Component {
    render() {
        return(
            <CardItem>
                <CardItemTop>
                    <Category/>
                    <ProductName/>
                </CardItemTop>
                <CardItemBottom>
                    <Price/>
                    <Buy/>            
                </CardItemBottom>
            </CardItem>
        );
    }
};
export default Card;