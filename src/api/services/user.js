import { axiosAPIInstance } from "../axios";

export async function createUser(
    name,
    lastname,
    email,
    password,
    code
) {
    try {
        const response = await axiosAPIInstance.post('/user', {
            name,
            lastname,
            email,
            password,
            code
        });
        return response;
    } catch (error) {
        return error.response;
    }
}