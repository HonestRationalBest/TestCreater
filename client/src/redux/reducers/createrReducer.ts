
const CREATE_TEST = 'CREATE_TEST'

export type initialStateType = {
    section: null | string,
    questionCount: null | number,
    testName: null | string,
    isRandom: null | boolean
}

type createReducerAction = {
    type: typeof CREATE_TEST,
    payload: {
        section: null | string,
        questionCount: null | number,
        testName: null | string,
        isRandom: null | boolean
    }
}


const initialState: initialStateType = {
    section: null,
    questionCount: null, 
    testName: null, 
    isRandom: null
};

const createrReducer = (state = initialState, action:createReducerAction) => {
    switch (action.type) {
        case "CREATE_TEST":
            return {...state, 
                section: action.payload.section,
                questionCount: action.payload.questionCount,
                testName: action.payload.testName,
                isRandom: action.payload.isRandom,
            }
        default:
            return state;
    }
};

export default createrReducer;