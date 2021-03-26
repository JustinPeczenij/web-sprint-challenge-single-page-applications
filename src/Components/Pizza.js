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
    font-weight:bold;
    `;

const MarginP = styled.p `
    margin:0;
    font-weight:bold;
`;

const SpacingDivGray = styled.div `
    width:auto;
    padding: 2% 0 2% 2%;
    background-color: lightgray;
`;

const SpacingDivWhite = styled.div `
    width:auto;
    padding: 2% 0 2% 2%;
    background-color: white;
`;

const SpacingDivWhiteBorder = styled.div `
    width:auto;
    padding: 2% 0 2% 2%;
    background-color: white;
    border-top: 1px solid black;
`;

const OrderButton = styled.button `
    width:70%;
    margin:0 5%;
    padding: 2% 0 2% 2%;
    background-color: white;
    border-top: 1px solid black;
`;
const AmountSelect = styled.select `
    width:10%;
    margin:0 5%;
    padding: 2% 0 2% 2%;
    background-color: white;
    border-top: 1px solid black;
`;

export default function Pizza(props) {
    const { change, form, disabled, submit, errors } = props

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

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
            <form onSubmit={onSubmit}>
                <SpacingDivGray>
                    <MarginH3>Name</MarginH3>
                </SpacingDivGray>
                <SpacingDivWhite>
                    <label>
                        <input 
                            name='name'
                            value={form.name}
                            type='text'
                            onChange={onChange}
                            />     
                    </label>
                    <p>{errors.name}</p>
                </SpacingDivWhite>
                <SpacingDivGray>
                    <MarginH3>Choose a Size</MarginH3>
                </SpacingDivGray>
                <SpacingDivWhite>
                    <label>
                        <select name='size' onChange={onChange} value={form.size}>
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
                    <label style={{margin: '5%'}}> Chicken
                        <input 
                            name='chicken'
                            type='checkbox'
                            checked={form.chicken}
                            onChange={onChange}
                        />
                    </label>
                    <label style={{margin: '5%'}}> Pepperoni
                        <input 
                            name='pepperoni'
                            type='checkbox'
                            checked={form.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label style={{margin: '5%'}}> Sausage
                        <input 
                            name='sausage'
                            type='checkbox'
                            checked={form.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label style={{margin: '5%'}}> Bacon
                        <input 
                            name='bacon'
                            type='checkbox'
                            checked={form.bacon}
                            onChange={onChange}
                        />
                    </label>
                </SpacingDivWhite>
                <SpacingDivGray>
                        <MarginP>Special Instructions?</MarginP>
                </SpacingDivGray>
                <SpacingDivWhite>
                    <input 
                        name='instructions'
                        type='text'
                        value={form.instructions}
                        onChange={onChange}
                        placeholder='Anything special you&apos;d like to add?'
                        style={{width:'96%'}}
                    />
                </SpacingDivWhite>
                <SpacingDivWhiteBorder>
                    <div>
                        <AmountSelect>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </AmountSelect>
                        <OrderButton disabled={disabled}>Add to Order</OrderButton>
                    </div>
                </SpacingDivWhiteBorder>
            </form>
        </StyledContainer>
    )
}