import {useState, useEffect} from 'react';
import url from '../constants/url'
import axios from 'axios'

export const useInput = () => {
    const [value, setValue] = useState('');
    
    useEffect(() => {
        const asyncFunc = async() => {
            const res = await axios.get(url.initialTextLink);
            setValue(
                res.data.initialText
            )
            }
            asyncFunc();
    }, []);
    
    return [value, setValue];
}

export default useInput;