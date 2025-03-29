export default function Login() {
    return (
        <section id="login" className="subscription">
            <div className="container">
                <div className="subscribe-title text-center">
                    <h2>Login to your account</h2>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <form id="login">
                            <div className="subscription-input-group">
                                <label htmlFor="email" style={{ display: "block", textAlign: "left", marginBottom: "10px" }}>
                                    Email:
                                </label>
                                <input type="email" id="email" name="email" className="subscription-input-form" placeholder="your@email.com" />

                                <label htmlFor="login-password" style={{ display: "block", textAlign: "left", marginTop: "30px", marginBottom: "10px" }}>
                                    Password:
                                </label>
                                <input type="password" id="login-password" name="password" className="subscription-input-form" placeholder="Enter your password" />
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
