import { useState } from "react";
import { registerUser, loginUser } from "../api/auth-api";
import { useNavigate } from "react-router-dom";

// useRegister hook
export function useRegister() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const register = async (email, password) => {
        try {
            setIsLoading(true);
            const { token, user } = await registerUser(email, password);
            localStorage.setItem("accessToken", token);
            return { user };
        } catch (err) {
            setError(err.message);
            return { error: err.message };
        } finally {
            setIsLoading(false);
        }
    };

    return { register, error, isLoading };
}

// useLogin hook
export function useLogin() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        try {
            setIsLoading(true);
            const { token, user } = await loginUser(email, password);
            localStorage.setItem("accessToken", token);
            navigate("/");
            return { user };
        } catch (err) {
            setError(err.message);
            return { error: err.message };
        } finally {
            setIsLoading(false);
        }
    };

    return { login, error, isLoading };
}

// useLogout hook
export function useLogout() {
    const navigate = useNavigate();

    const logout = () => {
        try {
            localStorage.removeItem("accessToken");
            navigate("/");
            console.log("Logout successful!")
        } catch (err) {
            console.log(err.message);
        } 
    }
    return { logout };
}