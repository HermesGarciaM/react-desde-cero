const courses = [
    {
        "id": 1,
        "title": "React desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/specialities/big/3e6a0de6-602b-439c-a90b-346f13c6760f.png",
        "price": "10",
        "teacher": "Hermes García"
    },
    {
        "id": 2,
        "title": "Go desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/small/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png",
        "price": "20",
        "teacher": "Hermes García"
    },
    {
        "id": 3,
        "title": "Javascript desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/specialities/big/3e6a0de6-602b-439c-a90b-346f13c6760f.png",
        "price": "30",
        "teacher": "Hermes García"
    },
    {
        "id": 4,
        "title": "Angular desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/small/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png",
        "price": "40",
        "teacher": "Hermes García"
    },
    {
        "id": 5,
        "title": "Magento desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/specialities/big/3e6a0de6-602b-439c-a90b-346f13c6760f.png",
        "price": "50",
        "teacher": "Hermes García"
    },
    {
        "id": 6,
        "title": "HTML desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/small/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png",
        "price": "60",
        "teacher": "Hermes Garca"
    },
]

const Course = ({match}) => {

    const currentCourse = courses.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <div className="ed-grid m-grid-3">
            {
                currentCourse ?
                    <>
                        <h1 className="m-cols-3">Curso: {currentCourse.title}</h1>
                        <img className="m-cols-1" src={currentCourse.image} alt={currentCourse.title}/>
                        <p className="m-cols-2" >Profesor: {currentCourse.teacher}</p>
                    </>
                : <h1>El curso no existe</h1>
            }
        </div>
    )
}

export default Course;