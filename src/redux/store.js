import {applyMiddleware, combineReducers, createStore} from "redux";
import {ADD_TO_CART, GET_COURSE_LIST, REMOVE_FROM_CART} from "./actions";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialStore = {
    cart: []
}

const initialCourses = {
    courses: []
}

const cartReducer = (state = initialStore, {type, id}) => {
    switch (type) {
        case ADD_TO_CART:
            if(state.cart.find(a => a === id)) return state
            return {
                ...state,
                cart: state.cart.concat(id)
            }
        case REMOVE_FROM_CART:
            if(state.cart.find(a => a === id)){
                return {
                    ...state,
                    cart: state.cart.filter(c=> c!== id) //excluir el id del array con filter
                }
            }else{
                console.log("element not found")
                return state
            }
        default:
            return state
    }
}

const coursesReducer = (state = initialCourses, {type, courses}) => {
    if(type === GET_COURSE_LIST){
        return {
            ...state,
            courses: courses
        }
    }
    return state
}

export default createStore(combineReducers({cartReducer, coursesReducer}), composeWithDevTools( applyMiddleware(thunk) ))