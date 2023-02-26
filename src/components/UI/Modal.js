import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css';
const Backdrop = (props) => {
    return ( <
        div className = { classes.backdrop }
        onClick = { props.onClose }
        />
    )
};
const ModalOverlays = props => {
    return ( <
        div className = { classes.modal } >
        <
        div className = { classes.content } > { props.children } < /div> <
        /div>
    );
};
const portalElements = document.getElementById('overlays')
const Modal = (props) => {
        return ( <
                Fragment > {
                    ReactDOM.createPortal( < Backdrop onClose = { props.onClose }
                        />, portalElements)} {
                            ReactDOM.createPortal( < ModalOverlays > { props.children } <
                                /ModalOverlays>,
                                portalElements
                            )
                        }

                        <
                        /Fragment>
                    )
                };
                export default Modal;