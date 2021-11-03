export const setJWTData = (jwtData) => {
    return {
        type: 'SET_JWTDATA',
        payload: jwtData
    }
};

export const clearStore = () => {
    return {
        type: 'CLEAR_STORE',
        payload: null
    }
};
