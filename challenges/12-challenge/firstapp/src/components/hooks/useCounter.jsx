import React,{useEffect,useState} from "react";

export const useCounter = (value) => {
    const [conta,setConta] = useState(0);

    const increment = () => {
        setConta(conta + 1);
    }

    const decrement = () => {
        setConta(conta - 1);
    }

    const reset = () => {
        setConta(0);
    }

    useEffect(()=>{
        switch(value) {
            case 0:
                increment();
            break;
            case 1:
                decrement();
            break;
            case 2:
                reset();
            break;
            default:
                break;
        }
    },[value])

    return {conta,increment}
}