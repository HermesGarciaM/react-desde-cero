import React from "react";
import propTypes from 'prop-types'
const Curso =  ({title, image, price, profesor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <div className="t5 s-mb-2 s-center">
                <h3 className="center">{title}</h3>
            </div>
            <div className="s-main-center">
                {`Prof.: ${profesor}`}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">{`$ ${price} USD`}</a>
            </div>
        </div>
    </article>
)

Curso.propTypes = {
    title: propTypes.string,
    image: propTypes.string,
    price: propTypes.number,
    profesor: propTypes.string
}

Curso.defaultProps = {
    title: "No hay título",
    image: "https://i.pinimg.com/originals/ed/16/ea/ed16ea95b9471971cac69d9d4403d8ca.jpg",
    price: 0,
    profesor: ""
}

export default Curso;