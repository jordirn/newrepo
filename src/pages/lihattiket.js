import React, { Fragment } from "react";
import logo from '../illustration/login.svg';
import { Link } from "react-router-dom";

export default function LihatTiket() {
    return (
        <Fragment>

            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <a class="navbar-brand" href="#" >Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/listtiketspv" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></Link>
                        <a class="nav-link" href="#">History</a>
                    </div>
                </div>
            </nav>

            <div class="container">
                <div className="Login">
                    <div className="row">
                        <div className="col1">
                            <h1 className="heading1">WELCOME TO</h1>
                            <h1 className="BRImo">BRI</h1>
                            <img src={logo} alt="ilustrasi login" />
                        </div>
                        <div className="col">
                            <form style={{ width: "100%" }}>
                                <div className="form-group">
                                    <h3 className="heading3">Ticket</h3>
                                    <label for="idcustomer">ID Customer</label>
                                    <input
                                        type="idcustomer"
                                        className="form-control"
                                        id="idcustomer"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="problem">Problem</label>
                                    <input
                                        type="problem"
                                        className="form-control"
                                        id="problem"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="replay">Replay</label>
                                    <input
                                        type="replay"
                                        className="form-control"
                                        id="replay"
                                    />
                                </div>
                                <button type="submit" class="btn btn-primary">Replay</button>
                            </form>
                        </div>

                    </div>

                    <footer className="page-footer font-small blue">
                        <div className="footer-copyright text-center py-3">
                            Copyright © FE-BE 07 2020
                    </div>
                    </footer>

                </div>
            </div>
        </Fragment>
    )
}