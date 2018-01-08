const initialState = {
    value: 0,
};

const CounterReducer = (state =initialState,action) => {
    switch (action.type){
        case 'INCREMENT_COUNTER':
            return {
                value: state.value + 1,
                retour: " ",
            };
        case 'DECREMENT_COUNTER':
            return {
                value: state.value - 1,
                retour: " ",
            };
        default:
            return state;
    }
};

export default CounterReducer;