import './styles/styles.scss';
import Curso from './Curso';

const cursos = [
    {
        "title": "React desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/specialities/big/3e6a0de6-602b-439c-a90b-346f13c6760f.png",
        "price": "10",
        "profesor": "Hermes García"
    },
    {
        "title": "Go desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/small/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png",
        "price": "20",
        "profesor": "Hermes García"
    },
    {
        "title": "Javascript desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/specialities/big/3e6a0de6-602b-439c-a90b-346f13c6760f.png",
        "price": "30",
        "profesor": "Hermes García"
    },
    {
        "title": "Angular desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/small/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png",
        "price": "40",
        "profesor": "Hermes García"
    },
    {
        "title": "Magento desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/specialities/big/3e6a0de6-602b-439c-a90b-346f13c6760f.png",
        "price": "50",
        "profesor": "Hermes García"
    },
    {
        "title": "HTML desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/small/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png",
        "price": "60",
        "profesor": "Hermes García"
    },
]
const App = () => (
    <>
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img alt="Imagen" className="main-banner__img" src="https://i.pinimg.com/originals/ed/16/ea/ed16ea95b9471971cac69d9d4403d8ca.jpg" />
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Curso</p>
                        <p>Tu futuro te está esperando</p>
                        <a href="https://ed.team" className="button">Suscribirse</a>
                    </div>
            </div>
        </div>
    </div>

    <div className="ed-grid m-grid-3">
        {
            cursos.map(curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} /> )
        }
    </div>
    </>
)

export default App;
