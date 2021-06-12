import '../styles/styles.scss';
import React from "react";
import CoursesProvider from "./Context/CoursesProvider";
import AppRoutes from "./AppRoutes";
import CartProvider from "./Context/Cart/CartProvider";

function App () {

    return (
        <CoursesProvider >
            <CartProvider>
                <AppRoutes />
            </CartProvider>
        </CoursesProvider>
    )
}

export default App;
