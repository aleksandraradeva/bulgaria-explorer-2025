import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser, loginUser } from "../api/auth-api";

import AuthContext from "../context/AuthContext";

// useRegister Hook
export function useRegister() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const register = async (email, password) => {
        try {
            setIsLoading(true);
            const { token, user } = await registerUser(email, password);
            localStorage.setItem("accessToken", token);
            localStorage.setItem("user", JSON.stringify(user));

            
            setIsAuthenticated(true);
            setUser(user);

            navigate("/"); 
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

// useLogin Hook
export function useLogin() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const login = async (email, password) => {
        try {
            setIsLoading(true);
            const { token, user } = await loginUser(email, password);
            localStorage.setItem("accessToken", token);
            localStorage.setItem("user", JSON.stringify(user));

           
            setIsAuthenticated(true);
            setUser(user);

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

// useLogout Hook
export function useLogout() {
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        try {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");

            setIsAuthenticated(false);
            setUser(null);

            navigate("/login"); 
            console.log("Successful logout!");
        } catch (err) {
            console.log(err.message);
        }
    };

    return { logout };
}
