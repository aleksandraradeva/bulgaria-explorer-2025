export default function Register() {
    return (
        <section id="register" className="subscription">
            <div className="container">
                <div className="subscribe-title text-center">
                    <h2>Create your account</h2>
                    <p>Become part of Bulgaria’s travel tribe - sign up now.</p>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <form id="register">
                            <div className="subscription-input-group">
                                <label htmlFor="register-email" style={{ display: "block", textAlign: "left", marginBottom: "10px" }}>
                                    Email:
                                </label>
                                <input type="email" id="register-email" name="email" className="subscription-input-form" placeholder="your@email.com" />

                                <label htmlFor="register-password" style={{ display: "block", textAlign: "left", marginTop: "30px", marginBottom: "10px" }}>
                                    Password:
                                </label>
                                <input type="password" id="register-password" name="password" className="subscription-input-form" placeholder="Enter your password" />

                                <label htmlFor="confirm-password" style={{ display: "block", textAlign: "left", marginTop: "30px", marginBottom: "10px" }}>
                                    Confirm Password:
                                </label>
                                <input type="password" id="confirm-password" name="confirmPassword" className="subscription-input-form" placeholder="Re-enter your password" />
                            </div>

                            <div style={{ textAlign: "center", marginTop: "40px" }}>
                                <button type="submit" className="appsLand-btn form-btn">
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
