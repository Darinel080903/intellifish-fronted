import { decodeJWT } from "../utils/jwt";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
        const {
            sub: email, password,
        } = decodeJWT(action.payload);

        const user = {
        email,
        password,
        };

        return {
            ...state,
            accessToken: action.payload,
            isAuthenticated: true,
            user,
        };
        case 'LOGOUT':
        return {
            ...state,
            accessToken: null,
            isAuthenticated: false,
            user: null,
        };

        default:
        return state;
    }
};

export default authReducer;