import React from 'react';
import styled from 'styled-components';


const NumberStyledComponent = styled.p ` 
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 45px;
    letter-spacing: -0.02em;
    color: #000000;
    margin-right: 4px;
`

class Number extends React.Component {
    render() {
        return(
               <NumberStyledComponent>14.99</NumberStyledComponent>   
        );
    }
};
export default Number;