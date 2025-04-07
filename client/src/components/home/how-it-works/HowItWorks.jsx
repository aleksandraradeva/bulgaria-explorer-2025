import { Link } from "react-router-dom";

export default function HowItWorks() {
    return (
        <section id="works" className="works">
            <div className="container">
                <div className="section-header">
                    <h2>how it works</h2>
                    <p>Learn more about how our website works</p>
                </div>

                <div className="works-content">
                    <div className="row">
                        {/* Step 1 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="single-how-works">
                                <div className="single-how-works-icon">
                                    <i className="flaticon-lightbulb-idea"></i>
                                </div>
                                <h2>
                                    <Link to={"/trips"}>
                                        1. explore <span> </span>{" "}
                                    </Link>
                                </h2>
                                <p>Check out our recommended trips and get inspired for your next adventure!</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="single-how-works">
                                <div className="single-how-works-icon">
                                    <i className="flaticon-networking"></i>
                                </div>
                                <h2>
                                    <Link to={"/trips/create"}>
                                        2. share <span> your experiences</span>
                                    </Link>
                                </h2>
                                <p>Recommend your favorite places in Bulgaria that you've been to and loved!</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="single-how-works">
                                <div className="single-how-works-icon">
                                    <i className="flaticon-location-on-road"></i>
                                </div>
                                <h2>
                                    <Link to="#">
                                        3. make <span> your</span> whishlist
                                    </Link>
                                </h2>
                                <p>Save your dream destinations and plan your perfect Bulgarian getaway!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
