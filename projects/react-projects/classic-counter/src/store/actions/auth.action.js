export const setAuth = (payload) => {
    return {
        type: "SET_AUTHORIZATION",
        payload: payload
    }
}

export const revokeAuth = () => {
    return {
        type: "REVOKE_AUTHORIZATION"
    }
}