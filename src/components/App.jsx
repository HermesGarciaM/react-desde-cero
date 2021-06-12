import '../styles/styles.scss';
import React from "react";
import {useState, useEffect} from "react";
import Course from "./Pages/Course";
import Courses from "./Pages/Courses";
import Form from './Pages/Form';
import History from "./Pages/History";
import Home from './Pages/Home';
import MainMenu from "./Organisms/MainMenu";
import Users from "./Pages/Users"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CoursesProvider from "./Context/CoursesProvider";
import Group from "./UseContext/Group";
import axios from "axios";

export const GroupContext = React.createContext();

function App () {

    /*return (
        <CoursesProvider >
            <Router>
                <MainMenu />
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/cursos/:id" component={ Course } />
                    <Route path="/cursos" component={ Courses } />
                    <Route path="/historial/:valor" component={ History } />
                    <Route path="/historial" component={ History } />
                    <Route path="/usuarios" component={ Users } />
                    <Route path="/formulario" component={ () => <Form name="Página de contacto"/> } />
                    <Route component={ () => (
                        <div className="ed-grid">
                            <h1>Error 404</h1>
                            <span>Página no encontrada</span>
                        </div>
                    ) } />
                </Switch>
            </Router>
        </CoursesProvider>
    )*/

    const [group, setGroup] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://namey.muffinlabs.com/name.json?count=100&with_surname=true&frequency=common")
            .then(response => setGroup(
                response.data
            ))
    }, []);

    function searchGroupMember (e) {
        setSearch(e.target.value)
    }

    function removeGroupMember (name) {
        const membersFiltered = group.filter(member => member !== name)
        setGroup(membersFiltered)
    }

    return (
        <GroupContext.Provider value={{
            group,
            search,
            searchGroupMember,
            removeGroupMember
        }}>
            <Group/>
        </GroupContext.Provider>
    )
}

export default App;
