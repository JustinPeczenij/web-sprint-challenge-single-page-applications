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

const MarginH3 = styled.h3 `
    margin:0;
`;

const MarginP = styled.p `
    margin:0;
`;

const SpacingDivGray = styled.div `
    width:auto;
    padding: 2% 0 2% 2%;
    background-color: gray;
`;

const SpacingDivWhite = styled.div `
    width:auto;
    padding: 2% 0 2% 2%;
    background-color: white;
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
            <form>
                <SpacingDivGray>
                    <MarginH3>Name</MarginH3>
                </SpacingDivGray>
                <SpacingDivWhite>
                    <label>
                        <input 
                            name='name'
                            value='form.name'
                            type='text'
                            onChange=''
                        />     
                    </label>
                </SpacingDivWhite>
                <SpacingDivGray>
                    <MarginH3>Choose a Size</MarginH3>
                </SpacingDivGray>
                <SpacingDivWhite>
                    <label>Choose a Size:
                        <select name='size'>
                            <option value=''>Select</option>
                            <option value='small'>Small (12")</option>
                            <option value='medium'>Medium (14")</option>
                            <option value='large'>Large (16")</option>
                            <option value='extra-large'>Extra Large (18")</option>
                        </select>
                    </label>
                    <p>yup errors ehre</p>
                </SpacingDivWhite>

                <SpacingDivGray>
                    <MarginH3>Toppings</MarginH3>
                    <MarginP>(Up to 2.)</MarginP>
                </SpacingDivGray>

                <SpacingDivWhite>
                    <label> Chicken
                        <input 
                            name='chicken'
                            type='checkbox'
                            checked='form.chicken'
                            onChange=''
                        />
                    </label>
                    <label> Pepperoni
                        <input 
                            name='pepperoni'
                            type='checkbox'
                            checked='form.pepperoni'
                            onChange=''
                        />
                    </label>
                    <label> Sausage
                        <input 
                            name='sausage'
                            type='checkbox'
                            checked='form.sausage'
                            onChange=''
                        />
                    </label>
                    <label> Bacon
                        <input 
                            name='bacon'
                            type='checkbox'
                            checked='form.bacon'
                            onChange='onChange'
                        />
                    </label>
                    <p>yup errors ehre</p>
                </SpacingDivWhite>
                <SpacingDivGray>
                            text input for special instructions
                    <button>Submit</button>
                </SpacingDivGray>
            </form>
        </StyledContainer>
    )
}