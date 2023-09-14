import { useReducer, useEffect } from "react";

function fetchReducer (state, action) {
    switch (action.type) {
        case "FETCH_INIT": 
            return ({...state, loading:true, error:null})
        
        case "FETCH_SUCESS":
            return {...state,loading:false, data :action.payload}
        case "FETCH_FAILURE" :
            return {...state,loading:false, error:action.payload}
    }
}

function useFetch(url) {
    const initialState = {
        data:null,
        loading:true,
        error:null
    }
    const [state, dispatch] = useReducer(fetchReducer,initialState)

    useEffect(() => {
        dispatch({type : "FETCH_INIT"})
        fetch(url)
        .then(resp => {
            if(!resp.ok) {
                throw new Error("Error en la respuesta de la url")
            }
            return resp.json()
        })
        .then(result => {
            dispatch({type:"FETCH_SUCESS", payload : result})
        })
        .catch(error => {
            dispatch({type: "FETCH_FAILURE", payload: initialState})
        })
    }, [url])

    return state
}

export default useFetch