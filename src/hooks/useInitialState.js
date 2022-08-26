import {useState} from "react";

const InitialState = {
    itemSelected: [],
    adventureDisplay: false,
}
const useInitialState = () => {
    const [state, setState] = useState(InitialState);

    const addFilterItem = (item) => {
        setState({
            ...state,
            itemSelected: [item],
        });
    };
    const updateDisplay = (bool) => {
        setState({
            ...state,
            adventureDisplay: bool,
        })
    };

    return {
        state,
        addFilterItem,
        updateDisplay,
    }
}

export default useInitialState;