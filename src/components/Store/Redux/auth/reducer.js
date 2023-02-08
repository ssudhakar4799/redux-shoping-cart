import { actionTypes } from "./action";


export const initialState = {
    isAuthentification: false,
    addcard:[],
    favorite:[]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                ...{ auth: {}, isAuthentification: true }
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                ...{ auth: {}, isAuthentification: false }
            };
            case actionTypes.ADDCARD:
                return {
                    ...state,
                    ...{ addcard:action.payload }
                };
                case actionTypes.ADDFAV:
                    return {
                        ...state,
                        ...{ auth:action.payload }
                    };
        default:
            return state;
    };

}
export default reducer;