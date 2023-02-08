

export const actionTypes = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    ADDCARD:"ADDCARD",
    ADDFAV:"ADDFAV"
}
export function login() {
    return {type: actionTypes.LOGIN}
}
export function logout (){
    return{type:actionTypes.LOGOUT}
}
export function addcard(payload){
    return{type:actionTypes.ADDCARD,payload}
}
export function addfav(payload){
    return{type:actionTypes.ADDFAV,payload}
}