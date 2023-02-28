// import Modal from '../UI/Modal';
// import { useContext } from 'react';
// import CartContext from '../../store/cart-context';
// import classes from './Cart.module.css';
// import CartItem from './CartItem';
// const Cart = (props) =>{
//     const cartCntx = useContext(CartContext)
// // const cartItem = <ul className={classes['cart-items']}>
// //     {cartCntx.items.map((item) => 
// // <li>Name : {item.name}, Price: {item.price}, quantity:{item.quantity})</li>
// // )}

// const groupedItems = {};
// cartCntx.items.forEach((item) => {
//   if (groupedItems[item.id]) {
//     groupedItems[item.id].quantity += item.quantity;
//     groupedItems[item.id].price += item.price * item.quantity;
//   } else {
//     groupedItems[item.id] = {
//       name: item.name,
//       price: item.price * item.quantity,
//       quantity: item.quantity,
//     };
//   }
// });

// const cartItems = Object.values(groupedItems).map((item) => (
//   <li key={item.id}>
//     Name: {item.name}, Price: ${item.price.toFixed(2)}, Quantity: {item.quantity}
//   </li>
// ));
// const cartItem = <ul className={classes['cart-items']}>{cartItems}</ul>;

// const totalAmount = cartCntx.items.reduce((acc, item) => {
//     return acc + (item.price * item.quantity);
//   }, 0);


// return (
//     <Modal onClose = {props.onClose}>
//         {cartItem}
//     <div className={classes.total}>
// <span> Total amount</span>
// <span> ${totalAmount.toFixed(2)} </span>
//         </div>
//         <div className={classes.actions}>
//             <button className={classes['button--alt']} onClick = {props.onClose}>Close</button>
//             <button className={classes.button}>Order</button>
//         </div>
//     </Modal>
// );

// };
// export default Cart;


import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
        const cartCtx = useContext(CartContext);

        const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
        const hasItems = cartCtx.items.length > 0;

        const cartItemRemoveHandler = (id) => {
            cartCtx.removeItem(id);
        };

        const cartItemAddHandler = (item) => {
            cartCtx.addItem({...item, amount: 1 });
        };

        const cartItems = ( <
            ul className = { classes['cart-items'] } > {
                cartCtx.items.map((item) => ( <
                    CartItem key = { item.id }
                    name = { item.name }
                    quantity = { Number(item.quantity) }
                    price = { item.price }
                    onRemove = { cartItemRemoveHandler.bind(null, item.id) }
                    onAdd = { cartItemAddHandler.bind(null, item) }
                    />
                ))
            } <
            /ul>
        );

        return ( <
            Modal onClose = { props.onClose } > { cartItems } <
            div className = { classes.total } >
            <
            span > Total Amount < /span> <
            span > { totalAmount } < /span> <
            /div> <
            div className = { classes.actions } >
            <
            button className = { classes['button--alt'] }
            onClick = { props.onClose } >
            Close <
            /button> {
                hasItems && < button className = { classes.button } > Order < /button>} <
                    /div> <
                    /Modal>
            );
        };

        export default Cart;