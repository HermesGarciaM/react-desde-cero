import {useState, useEffect} from "react";

function useFetch (url, defaultValue) {
    const [data, setData] = useState({defaultValue});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function getData(){
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setData(response)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                setError(error)
            })
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, []);


    return {
        data,
        loading,
        error
    }
}

export default useFetch