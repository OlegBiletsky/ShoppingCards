import React from 'react';
import styled from 'styled-components';


const BuyButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 24px;
    width: 64px;
    height: 56px;
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #4BCFA0;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
    &:hover{
        background: #4BCFA0;
        color: #FFFFFF;

    }


`
class Buy extends React.Component {
    render() {
        return(
                <BuyButton>
                    Buy           
                </BuyButton>
        );
    }
};
export default Buy;