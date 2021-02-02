import React from 'react';
import styled from 'styled-components';


const BuyButton = styled.button`
    display: flex;
    align-items: center;
    padding: 18px 16px 16px 16px;
    margin: 0px 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    width: 64px;
    height: 56px;
    background: #FFFFFF;
    color: #4BCFA0;
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
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