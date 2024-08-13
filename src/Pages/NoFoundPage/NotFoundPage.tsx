import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFound = () => {
    return (
        <div className="notfound_wrapper">
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p>The page you are looking for is no longer available</p>
            <Link to={"/"}> Return </Link>
        </div>
    );
};
export default NotFound;