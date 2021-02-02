import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import BuyCheapest from './BuyCheapest';


const AppField = styled.div`
    max-width: 1440px;
    min-height: 900px; 
    margin: 0 auto;
    text-align: center;
    padding: 52px 76px 0 76px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction:column;
    /* justify-content: space-between; */
    flex-wrap: wrap;
`
const CardsField = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;
    background-color: #E5E5E5;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
`


class Cards extends React.Component {
    render() {
        return(
            <AppField>
                <CardsField>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>  
                </CardsField>
                <BuyCheapest/>
            </AppField>
        );
    }
};
export default Cards;