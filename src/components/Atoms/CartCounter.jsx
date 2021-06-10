import React from 'react';
import {connect} from "react-redux";

const CartCounter = ({ cartLength }) => {
    return (
        <li>
           <button className="button tiny ghost">
               {`Carrito: ${cartLength}`}
           </button>
        </li>
    );
};

const mapStateToProps = state => ({
    cartLength: state.cartReducer.cart.length
})


export default connect(mapStateToProps)(CartCounter);
