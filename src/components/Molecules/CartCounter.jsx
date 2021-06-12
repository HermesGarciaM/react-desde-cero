import React, {Component} from 'react';
import {observer, inject} from "mobx-react";

@inject("CartStore")
@observer
class CartCounter extends Component{


    render() {
        const {CartStore} = this.props;
        return (
            <span>
                Carrito: {CartStore.cart.length}
            </span>
        );
    }
}

export default CartCounter;
