export const API_ROOT = 'http://127.0.0.1:8000/api';
export const apiEndpoint = (endpoint) => {
    return API_ROOT + endpoint;
}

export const ErrorCodes = {
    USER_ALREADY_EXISTS: 0
}