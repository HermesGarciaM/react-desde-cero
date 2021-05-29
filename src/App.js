import './styles/styles.scss';
import Curso from './Curso';

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
        <Curso />
    </div>
    </>
)

export default App;
