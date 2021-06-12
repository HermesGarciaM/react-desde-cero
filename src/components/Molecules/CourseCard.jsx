import React from "react";
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {inject, observer} from "mobx-react";

@inject("CartStore")
@observer
class CourseCard extends React.Component {
    render() {
        const {id, title, image, price, teacher, CartStore} = this.props;
        return (
            <article className="card">
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <Link to={`/cursos/${id}`}>
                        <img src={image} alt={title} />
                    </Link>
                </div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                    <div className="t5 s-mb-2 s-center">
                        <h3 className="center">{title}</h3>
                    </div>
                    <div className="s-main-center">
                        {`Prof.: ${teacher}`}
                    </div>
                    <div className="s-main-center">
                        {
                            CartStore.cart.find(c => c === id) ?
                                <button
                                    onClick={ () => CartStore.removeFromCart(id) }
                                    className="button--ghost-alert button--tiny">
                                    { `Remover del carrito`}
                                </button>
                                :
                                <button
                                    onClick={ () => CartStore.addToCart(id) }
                                    className="button--ghost-alert button--tiny">
                                    { `$ ${price} USD`}
                                </button>
                        }
                    </div>
                </div>
            </article>
        )
    }
}

CourseCard.propTypes = {
    title: propTypes.string,
    image: propTypes.string,
    price: propTypes.string,
    teacher: propTypes.string
}

CourseCard.defaultProps = {
    title: "No hay título",
    image: "https://i.pinimg.com/originals/ed/16/ea/ed16ea95b9471971cac69d9d4403d8ca.jpg",
    price: 0,
    teacher: ""
}

export default CourseCard;