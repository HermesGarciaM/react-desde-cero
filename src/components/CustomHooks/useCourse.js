import {useState, useEffect} from "react";
import axios from "axios";

const useCourse = id => {
    const [course, setCourse] = useState({})
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/HermesGarciaM/jsonserver/cursos/${id}`)
            .then(resp => setCourse(resp.data))
    }, [id]);

    return course;
}

export default useCourse