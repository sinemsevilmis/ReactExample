import { Fragment } from 'react';
import ReactDOm from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = props => {
    return (
        <div className = {classes.bacdrop} onClick= {props.onClose}></div>
    );
};

const ModalOverLay = props => {
    return (
        <div className = {classes.modal}>
            <div className= {classes.content}>{props.children}</div>
        </div>
   
    );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <Fragment>
           {ReactDOm.createPortal(<Backdrop onClose={props.onClose}/>, portalElement )}
           {ReactDOm.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, 
           portalElement)}
        </Fragment>
    );
};

export default Modal;