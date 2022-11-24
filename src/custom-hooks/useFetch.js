import { useState, useEffect } from 'react';

const baseUrl = process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/${url}`);
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url])

    return {
        data,
        error,
        loading
    }
};

export default useFetch;