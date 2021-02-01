import React from 'react';
import styled from 'styled-components';


const BuyCheapestButton = styled.button  ` 
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 48px;
    width: 235px;
    height: 60px;
    background: #4BCFA0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
`
const BuyCheapestText = styled.p ` 
    position: static;
    width: 139px;
    height: 28px;
    left: 48px;
    top: 16px;
    font-family: 'Roboto' sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
`
class BuyCheapest extends React.Component {
    render() {
        return(
            <BuyCheapestButton>
                <BuyCheapestText>Buy cheapest</BuyCheapestText>
            </BuyCheapestButton>
        );
    }
};
export default BuyCheapest;