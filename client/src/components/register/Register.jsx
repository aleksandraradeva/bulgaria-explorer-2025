import { useState } from "react";
import { useRegister } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import useRegisterValidation from "../../hooks/validationHooks/useRegisterValidation";
import ErrorModal from "../common/ErrorModal";


export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { formData, formChangeHandler, resetForm } = useForm({
        email: "",
        password: "",
        confirmPassword: "",
      });

      const [errorMessage, setErrorMessage] = useState(null);
      const { validate } = useRegisterValidation(formData);

      const formSubmitHandler = async (e) => {
        e.preventDefault();

        const error = validate();
        if (error) {
            setErrorMessage(error);
            return;
        }

        try {
            const { user, error } = await register(formData.email, formData.password);
            if (error) {
                setErrorMessage(error);
            } else {
                resetForm();
                navigate("/trips"); 
                console.log("Registration successful!");
            }
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    return (
        <section id="register" className="subscription">
            <div className="container">
            {errorMessage && (
                <ErrorModal message={errorMessage} onClose={() => setErrorMessage(null)} />
            )}
                <div className="subscribe-title text-center">
                    <h2>Create your account</h2>
                    <p>Become part of Bulgaria's travel tribe - sign up now.</p>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <form id="register" onSubmit={formSubmitHandler}>
                            <div className="subscription-input-group">
                                <label 
                                    htmlFor="register-email" 
                                    style={{ display: "block", textAlign: "left", marginBottom: "10px" }}>
                                    Email:
                                </label>
                                <input 
                                    type="email" 
                                    id="register-email" 
                                    name="email" className="subscription-input-form"
                                    value={formData.email}
                                    onChange={formChangeHandler}
                                    placeholder="your@email.com" 
                                    />

                                <label 
                                    htmlFor="register-password" 
                                        style={{ display: "block", textAlign: "left", marginTop: "30px", marginBottom: "10px" }}>
                                    Password:
                                </label>
                                <input 
                                    type="password" 
                                    id="register-password" 
                                    name="password" 
                                    className="subscription-input-form"
                                    value={formData.password}
                                    onChange={formChangeHandler} 
                                    placeholder="Enter your password" 
                                    />

                                <label 
                                    htmlFor="confirm-password" 
                                    style={{ display: "block", textAlign: "left", marginTop: "30px", marginBottom: "10px" }}>
                                    Confirm Password:
                                </label>
                                <input 
                                    type="password" 
                                    id="confirm-password" 
                                    name="confirmPassword" 
                                    className="subscription-input-form"
                                    value={formData.confirmPassword}
                                    onChange={formChangeHandler}
                                    placeholder="Re-enter your password" />
                            </div>

                            <div style={{ textAlign: "center", marginTop: "40px" }}>
                                <button 
                                type="submit" 
                                className="appsLand-btn form-btn">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}