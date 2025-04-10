import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import useLoginValidation from "../../hooks/validationHooks/useLoginValidation";

import ErrorModal from "../common/ErrorModal";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState(null);
    
    const { formData, formChangeHandler, resetForm } = useForm({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { login } = useLogin();
    const { validate } = useLoginValidation(formData);

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const error = validate();
        if (error) {
            setErrorMessage(error);
            return;
        }

        try {
            const { user, error } = await login(formData.email, formData.password);
            if (error) {
                setErrorMessage("Invalid email or password!");
            } else {
                resetForm();
                navigate("/trips");
                console.log("Login successful!");
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <section id="login" className="subscription">
            <div className="container">
            {errorMessage && (
                <ErrorModal message={errorMessage} onClose={() => setErrorMessage(null)} />
            )}
                <div className="subscribe-title text-center">
                    <h2>Login to your account</h2>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <form id="login" onSubmit={formSubmitHandler}>
                            <div className="subscription-input-group">
                                <label 
                                    htmlFor="email" 
                                    style={{ display: "block", textAlign: "left", marginBottom: "10px" }}>
                                    Email:
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="subscription-input-form"
                                    value={formData.email}
                                    onChange={formChangeHandler}
                                    placeholder="your@email.com" 
                                    />

                                <label 
                                    htmlFor="login-password" 
                                    style={{ display: "block", textAlign: "left", marginTop: "30px", marginBottom: "10px" }}>
                                    Password:
                                </label>
                                <input 
                                    type="password" 
                                    id="login-password"
                                    name="password" 
                                    className="subscription-input-form"
                                    value={formData.password}
                                    onChange={formChangeHandler}
                                    placeholder="Enter your password" 
                                    />
                            </div>

                            <div style={{ textAlign: "center", marginTop: "40px" }}>
                                <button type="submit" className="appsLand-btn">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}