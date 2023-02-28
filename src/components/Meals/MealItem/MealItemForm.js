import React, { useState, useRef } from "react";
import Input from "../../UI/Input";
import Classes from "./MealItemForm.module.css";
//import CartContext from "../../../store/cart-context";
function MealItemForm(props) {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    // const cartcnt = useContext(CartContext);
    const addItemToCart = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
        // const quantity = document.getElementById("amount_" + props.id).value;
        //  if (!cartcnt.items.some((el) => el.id === props.item.id)){
        //  cartcnt.addItem({ ...props.item, quantity: quantity });
        // console.log("Checking", cartcnt.items);
        //  }
        // else {
        //   cartcnt.items.forEach((el) => {
        //     if (el.id === props.id) {
        //       el.quantity = +el.quantity + +quantity;
        //     }
        //   });
        // }
        //     const  amount = +amountInputRef.current.value;
        //     const price = props.item ? `₹${props.item.price.toFixed(2)}` : '';

        //     cartcnt.addItem({
        //         id: props.item?.id,
        //       name: props.item.title,
        //       amount: amount,
        //       price: props.item.price,
        //     });
    };
    return ( <
        form className = { Classes.form }
        onSubmit = { addItemToCart } > { /* {console.log("inside render", cartcnt.items)} */ } <
        Input ref = { amountInputRef }

        label = "Quantity"
        input = {
            {

                id: "amount_" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1",
            }
        }
        /> <
        button > +Add < /button> {
            !amountIsValid && < p > Please enter a valid amount(1 - 5). < /p>} <
                /form>
        );
    }

    export default MealItemForm;