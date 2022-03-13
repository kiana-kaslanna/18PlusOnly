import { useEffect, useState } from "react";

export default function useFetch(url, dataType = 'text', callback = () => void 0) {

    const [data, setData] = useState(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (dataType === 'text') {
                    return res.text()
                } else if (dataType === 'json') {
                    return res.json()
                }
            })
            .then(data => {
                setData(data);
                callback(data);
                setDone(true);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return { done, data }
}

export function useFetchObject(url, callback = () => void 0) {
    return useFetch(url, 'json', callback);
}

export function useKeepFetch(url, dataType = 'text', callback = () => void 0) {

    const [data, setData] = useState(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (dataType === 'text') {
                    return res.text()
                } else if (dataType === 'json') {
                    return res.json()
                }
            })
            .then(data => {
                setData(data);
                callback(data);
                setDone(true);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    return { done, data }
}