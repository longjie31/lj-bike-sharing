import React, {
    useState,
    useEffect,
    useRef
} from 'react';
// 自定义hooks
const useCurrentValue = (initValue,value)=>{
    const ref = useRef(initValue);
    useEffect(()=>{
        ref.current = value;
    },[value]);
    return ref;
}

export default useCurrentValue;