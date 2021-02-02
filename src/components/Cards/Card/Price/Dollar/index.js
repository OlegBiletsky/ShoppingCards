import React from 'react';
import styled from 'styled-components';


const DollarIcon = styled.p ` 
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    line-height: 35px; 
    letter-spacing: -0.02em;
    color: #000000;
    margin-right: 4px;
`

class Dollar extends React.Component {
    render() {
        return(
               <DollarIcon>$</DollarIcon>   
        );
    }
};
export default Dollar;