const initialState = {};

const jwtReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case 'SET_JWTDATA':
            newState = action.payload
            return state = {...state, ...newState}
        default:
            return state;
    }
}

export default jwtReducer;