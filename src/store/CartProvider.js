import { useReducer } from "react";
import CartContext from "./cart-context";
// let items = [];
const defaultCartState = {
    items: [],
    totalAmount: 0,
};
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        //for adding item
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            //if items exist already
            const updateItem = {
                ...existingCartItem,
                quantity: Number(existingCartItem.quantity) + Number(action.item.quantity),
            };
            updatedItems = [...state.items]; // state copy
            updatedItems[existingCartItemIndex] = updateItem; //updated
        } else {
            // adding new item for the first time
            updatedItems = state.items.concat(action.item);
        }
        const updatedAmount =
            state.totalAmount + action.item.price * action.item.quantity;
        return {
            items: updatedItems,
            totalAmount: updatedAmount,
        };
    }
    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;
        if (existingCartItem.quantity === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};
const CartProvider = (props) => {
    const [cartState, dispatachCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );
    const addItemToCartHandler = (item) => {
        // console.log("inside addItemToCartHandler", cartContext);
        dispatachCartAction({ type: "ADD", item: item });
    };
    const removeItemFromCartHandler = (id) => {
        dispatachCartAction({ type: "REMOVE", id: id });
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return ( <
        CartContext.Provider value = { cartContext } > { console.log("inside crtContext", cartContext) } { props.children } <
        /CartContext.Provider>
    );
};
export default CartProvider;