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

    return {
        state,
        addFilterItem,
    }
}

export default useInitialState;