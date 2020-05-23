import { LOGIN_USER } from "../types";

// export const loginUser = token => dispatch => {
//      dispatch({
//         type: LOGIN_USER,
//         payload: token.token
//     });
// };


export function loginUser(token) {
    return { type: LOGIN_USER, payload: token }
}