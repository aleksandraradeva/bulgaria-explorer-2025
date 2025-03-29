import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="welcome-hero">
        
		<div className="container">

            <div className="welcome-hero-txt">
                <h2>Explore Bulgaria,<br />where every corner tells a story</h2>
                <p>From breathtaking landscapes to historic treasures, your next adventure starts right here.</p>
            </div>

            <div className="welcome-hero-btn-container">
				<Link to="/trips" className="welcome-hero-btn">start exploring </Link>
         </div>
       
	    </div>

    </section>

  );
};