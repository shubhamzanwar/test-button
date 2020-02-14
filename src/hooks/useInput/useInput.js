/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';
const useInput = (url, defaultValue) => {
    const [text, setText] = useState(defaultValue);
    useEffect(() => {
        async function fetchData() {
            const intialContent = await axios.get(url);
            setText(intialContent.data.initialText);
        }
        fetchData();
    }, []);

    return [text, setText];
}

export default useInput;