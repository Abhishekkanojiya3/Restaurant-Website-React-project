import React from "react";
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);

    console.log(cartCtx.items);
    const quantity = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + Number(item.quantity);
    }, 0);
    // let quantity = 0;
    // cartCtx.items.forEach((item) => {
    //   quantity = quantity + Number(item.quantity);
    // });

    return ( <
        button onClick = { props.onClick }
        className = { classes.button } >
        <
        span className = { classes.icon } >
        <
        CartIcon / >
        <
        /span> <
        span > Your Cart < /span> <
        span className = { classes.badge } > { quantity } < /span> <
        /button>
    );
}

export default HeaderCartButton;