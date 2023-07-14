import { axiosAPIInstance } from "../axios";

export async function signIn(email, password) {
    try {
        const response = await axiosAPIInstance.post('/auth/token', {
            email,
            password,
        });
        return response;
    } catch (error) {
        return error.response;
    }
}