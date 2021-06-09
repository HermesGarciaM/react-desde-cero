import React, { useState } from "react";
import useFetch from "../CustomHooks/useFetch";

const Course = ({match}) => {

    const [comment, setComment] = useState("Sin comentarios");

    //const course = useCourse(match.params.id)

    const course = useFetch(`https://my-json-server.typicode.com/HermesGarciaM/jsonserver/cursos/${match.params.id}`,[]);

    const myComment = e => {
        setComment(e.target.value)
    }

    return (
        <div className="ed-grid m-grid-3">
            {course.loading && <h1>Cargando...</h1>}
            {(course.loading === false && course.data) &&
                    <>
                        <div className="ed-grid">
                            <div className=" ed-grid l-block">
                                <h1 className="m-cols-3">Curso: {course.data.title}</h1>
                                <img className="m-cols-1" src={course.data.image} alt={course.data.title}/>
                                <p className="m-cols-2" >Profesor: {course.data.teacher}</p>
                            </div>
                            <div className="ed-grid">
                                <h2>Escribe tu comentario</h2>
                                <input type="text" placeholder="Escribe..." onChange={myComment.bind(this)}/>
                                <p>{comment}</p>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Course;