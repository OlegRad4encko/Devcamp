import {useState} from 'react';

const useCustomHook = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);
    return [counter, setCounter] ;
}

export default useCustomHook