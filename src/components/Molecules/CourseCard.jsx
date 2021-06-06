import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CourseCard =  ({id, title, image, price, teacher}) => (
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
                <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price} USD`}</a>
            </div>
        </div>
    </article>
)

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