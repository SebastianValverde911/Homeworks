import React, { useEffect, useState } from "react";

export const useCounter = (value) => {
    const [conta, setConta] = useState(0);

    const Increment = () => {
        setConta(conta + 1);
    }

    const Decrement = () => {
        setConta(conta - 1);

    }
    
    const Reset = () => {
        setConta(0);
    }

    useEffect(()=>{
        switch (value) {
            case 0:
                Increment();
                break;
            case 1:
                Decrement();
                break;
            case 2:
                Reset();
                break;
        
            default:
                break;
        }
    },[value]);

    return {conta,Increment,Decrement,Reset}
}