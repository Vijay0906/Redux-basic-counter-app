export const IncAction = (value) => async dispatch =>{
    dispatch({
        type:"INCREAMENT",
        payload: value
    })
}

export const DecAction = () => async dispatch =>{
    dispatch({
        type:"DECREMENT"
    })
}