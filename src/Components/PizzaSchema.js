import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().min(2, 'Name must be at least 2 characters.'),
    size: yup.string().matches(/(small|medium|large)/, 'Please select a size'),
    chicken: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    instructions: yup.string()
})