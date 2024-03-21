"use client";

import { useEffect } from "react";

interface ErrorProps{
    error: Error;
    reset: () => void;
}

export default function Error({error,reset}: ErrorProps){

    useEffect(() => {
        console.log(error)
    }, [])

    return(
        <div style={{
            padding: '10 rem',
        }}>
            <h1>:v</h1>
            <p>Ha ocurrido un error</p>
            <button onClick={reset}>Try Again</button>
        </div>
    )
}