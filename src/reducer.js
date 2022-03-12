const count = 5;

export default function reducer(state = count,action){
    const{type,payload} = action;
    switch(type){
        case "INCREAMENT":
            return state+payload;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}