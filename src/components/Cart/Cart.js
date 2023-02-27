import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
const Cart = (props) => {
    const cartCntx = useContext(CartContext)
        // const cartItem = <ul className={classes['cart-items']}>
        //     {cartCntx.items.map((item) => 
        // <li>Name : {item.name}, Price: {item.price}, quantity:{item.quantity})</li>
        // )}
    const groupedItems = {};
    cartCntx.items.forEach((item) => {
        if (groupedItems[item.id]) {
            groupedItems[item.id].quantity += item.quantity;
            groupedItems[item.id].price += item.price * item.quantity;
        } else {
            groupedItems[item.id] = {
                name: item.name,
                price: item.price * item.quantity,
                quantity: item.quantity,
            };
        }
    });

    const cartItems = Object.values(groupedItems).map((item) => ( <
        li key = { item.id } >
        Name: { item.name }, Price: $ { item.price.toFixed(2) }, Quantity: { item.quantity } <
        /li>
    ));
    const cartItem = < ul className = { classes['cart-items'] } > { cartItems } < /ul>;

    const totalAmount = Object.values(groupedItems).reduce((acc, item) => {
        return acc + item.price;
    }, 0);

    return ( <
        Modal onClose = { props.onClose } > { cartItem } <
        div className = { classes.total } >
        <
        span > Total amount < /span> <
        span > $ { totalAmount.toFixed(2) } < /span> <
        /div> <
        div className = { classes.actions } >
        <
        button className = { classes['button--alt'] }
        onClick = { props.onClose } > Close < /button> <
        button className = { classes.button } > Order < /button> <
        /div> <
        /Modal>
    );

};
export default Cart;