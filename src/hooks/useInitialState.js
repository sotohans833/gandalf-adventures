import {useState} from "react";

const InitialState = {
    itemSelected: [],
}
const useInitialState = () => {
    const [state, setState] = useState(InitialState);

    const addFilterItem = (item) => {
        setState({
            ...state,
            itemSelected: [item],
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
        addFilterItem,
        removeFromCart,
    }
}

export default useInitialState;