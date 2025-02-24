import { ADD_TO_CART,REMOVE_CART } from "./constants";

const initialStatr = [];

export const reducer = (state=initialStatr,action)=>{

    switch (action.type) {
        case ADD_TO_CART:   
            return [
                        ...state,
                        action.data
                   ];
        case REMOVE_CART: 
        return state.filter(item => item.name !== action.data);

        default:
            return state;
    }
}


