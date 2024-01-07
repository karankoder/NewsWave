import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg mb-5" style={{ position: 'fixed', top: '0', width: '100%', height: '70px', backgroundColor: '#7373ff', color: 'white', zIndex: '1000' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light fs-2" to="/">NewsWaves</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light fs-4 mt-1" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light fs-5 mt-2" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light fs-5 mt-2" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light fs-5 mt-2" aria-current="page" to="general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light fs-5 mt-2" aria-current="page" to="health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light fs-5 mt-2" aria-current="page" to="science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light fs-5 mt-2" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light fs-5 mt-2" aria-current="page" to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
