import { Link } from "react-router-dom";
import "../styles/App.css";
import Navigation from "../components/Navigation/Navigation";

const NotFound = () => (
  <div className="page">
     <Navigation />
    <div className="main-content">
      <div className="card-404">
        <div className="title-404">
          <h1>404</h1>
        </div>
        <div className="subtitle-404">
          <p>:(</p>
        </div>
        <div className="home-btn-404">
          <Link className="link-404" to="/">RETURN HOME</Link>
        </div>
      </div>
    </div>
  </div>
);
export default NotFound;