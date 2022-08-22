import {useState} from "react";

const InitialState = {
    adventure: [],
}
const useInitialState = () => {
    const [state, setState] = useState(InitialState);

    const addAdventure = (payload) => {
        setState({
            ...state,
            adventure: [...state.adventure, payload]
        });
    };
    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((product, index) => index != indexValue),
        })
    };

    return {
        state,
        addAdventure,
        removeFromCart,
    }
}

export default useInitialState;