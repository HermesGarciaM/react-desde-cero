import '../styles/styles.scss';
import AppRoutes from "./AppRoutes";
import {Provider} from "react-redux";
import store from "../redux/store";
import {getCourseList} from "../redux/actionsCreators";

store.dispatch(getCourseList())

const App = () => (
    <Provider store={store} >
        <AppRoutes />
    </Provider>
)

export default App;
