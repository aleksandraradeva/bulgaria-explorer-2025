import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";

export default function Header() {
    const { logout } = useLogout();

  return (
   
    <section className="top-area">

        <div className="header-area">
            <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fLink fa-bars"></i>
                        </button>
                        <Link to="/" className="navbar-brand">Bulgaria<span>Explorer</span></Link>
                    </div>

                    <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                            <li className="scroll"><Link to="/">home</Link></li>
                            <li className="scroll"><Link to="/trips">explore</Link></li>
                            <li className="scroll"><Link to="/trips/create">create trip</Link></li>
                            <li className="scroll"><Link to="/trips/mytrips">my trips</Link></li>
                            <li className="scroll"><Link to="/login">login</Link></li>
                            <li className="scroll"><Link to="/register">register</Link></li>
                            <li className="scroll"><button onClick={(logout)} className="logout-btn">logout</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className="clearfix"></div>
        
    </section>
  );
};