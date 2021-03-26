import React from "react";
import styled from 'styled-components';

const HeroImage = styled.div`
    background-image: url('https://eskipaper.com/images/pizza-12.jpg');
    background-size: auto;
    height: 60vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:flex-end;
`;

const HeroContent = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    height:60vh;
    justify-content:space-around;
`;

const Slogan = styled.h1`
    font-size: 3rem;
    font-style: italic;
`;

const PizzaButton = styled.button`
    font-size:1.2rem;
    color: black;
    padding:2% 6%;
    background-color: white;
    border: 2px solid black;
`;

export default function Home (props) {
    return (
        <div className='home-wrapper'>
            <HeroImage>
                <HeroContent>
                    <Slogan>Your favorite food, delivered while coding</Slogan>
                    <PizzaButton>Pizza?</PizzaButton>
                </HeroContent>
            </HeroImage>
        </div>
    )
}