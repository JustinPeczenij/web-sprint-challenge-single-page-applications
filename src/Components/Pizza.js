import React from 'react';
import styled from 'styled-components';
import "../App.css";


const StyledContainer = styled.div`
    width:50%;
    margin: auto;
    border: 1px solid black;
`;

const TextAlignH3 = styled.h3 `
    text-align:center;
`;

export default function Pizza(props) {
    return(
        <StyledContainer className='pizza-container'>
            <TextAlignH3>Build Your Own Pizza</TextAlignH3>
            <img 
                className='pizza-form-image'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn9J8vvrBUFhpSGgmCZZG4J94DasyPwxIHA&usqp=CAU'
                alt='pizzas-cooking'
            />
            <div>
                <h2>Build Your Own Pizza</h2>
            </div>
            <div>
                <h2>name</h2>
            </div>

            <div>
                <label>Choose a Size
                    <select>
                        <option>Select</option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </label>
                <p>yup errors ehre</p>
            </div>

            <div>
                <h2>CheckList for toppings</h2>
                <p>yup errors ehre</p>
            </div>

            <div>
                text input for special instructions
            </div>
        </StyledContainer>
    )
}