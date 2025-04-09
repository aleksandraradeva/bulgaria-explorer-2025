import * as fetcher from "./fetcher"; 

const BASE_URL = "http://localhost:3000/api/users";

// Register
export async function registerUser(email, password) {
    try {
        const result = await fetcher.post(`${BASE_URL}/register`, { email, password });
        const { token, user } = result; 
        return { token, user };
    } catch (error) {
        throw new Error("Registration failed: " + "Email is not unique! Please enter another email.");
    }
}

// Login
export async function loginUser(email, password) {
    try {
        const result = await fetcher.post(`${BASE_URL}/login`, { email, password });
        const { token, user } = result;
        return { token, user };
    } catch (error) {
        throw new Error("Login failed: " + error.message);
    }
}