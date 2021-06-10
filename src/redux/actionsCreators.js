import {ADD_TO_CART, GET_COURSE_LIST, REMOVE_FROM_CART} from "./actions";
import axios from "axios";

const addToCart = id => ({
    type: ADD_TO_CART,
    id //Modo resumido si atributo y data se llaman igual
})

const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    id
})

const getCourseList= () => dispatch => {
    axios.get("https://my-json-server.typicode.com/HermesGarciaM/jsonserver/cursos/")
        .then(response => {
            return dispatch({
                type: GET_COURSE_LIST,
                courses: response.data
            })
        })
}


export { addToCart, removeFromCart, getCourseList }