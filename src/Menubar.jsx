import { Link } from "react-router-dom";
const Menubar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">SHOPING CARD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <Link to="/" className="nav-link active">Home</Link>
                            <Link to="/Products" className="nav-link active">Products</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Menubar;