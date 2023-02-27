import { useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';
const MealItemForm = props => {
    const cartCntx = useContext(CartContext);
    const addItemCart = (event) => {
        event.preventDefault();
        const quantity = document.getElementById('amount_' + props.id).value
        cartCntx.addItem({...props.item, quantity: quantity })
        console.log(cartCntx)
    }
    return ( <
        form className = { classes.form } >
        <
        Input label = 'Amount'
        input = {
            {
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }
        }
        /> <
        button onClick = { addItemCart } > +Add < /button> <
        /form>
    );
};
export default MealItemForm;