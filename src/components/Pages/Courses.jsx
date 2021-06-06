import React from "react";
import axios from "axios";
import CourseGrid from "../Organisms/CourseGrid";

class Courses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/HermesGarciaM/jsonserver/cursos')
            .then(response => {
                this.setState({
                    courses: response.data
                })
            })
    }

    render() {
        const {courses} = this.state
        return <CourseGrid courses={courses} />
    }
}


export default Courses