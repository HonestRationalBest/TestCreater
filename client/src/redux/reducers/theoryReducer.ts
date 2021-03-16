
const SET_SECTION = 'SET_SECTION'

type initialStateType = {
    section: Array<object>,
}

type createReducerAction = {
    type: typeof SET_SECTION,
    payload: {
        name: null | string,
        ownerId: null | string,
    }
}


const initialState: initialStateType = {
    section: [],
};

const theoryReducer = (state = initialState, action:createReducerAction) => {
    switch (action.type) {
        case "SET_SECTION":
            return {...state, 
                section: action.payload,
            }
        default:
            return state;
    }
};

export default theoryReducer;