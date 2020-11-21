import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function ListTiketSpv() {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#" >Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#">History</a>
            <Link to="/listakuncs" class="nav-item nav-link active">Account CS <span class="sr-only">(current)</span></Link>
            <a class="nav-link" href="#">Regist CS</a>
            <Link to="/" class="nav-item nav-link active">Logout <span class="sr-only">(current)</span></Link>
          </div>
        </div>
      </nav>


      <div class="container">
        <div class="row">
          <div class="col5">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" width="50">Categories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    <label class="form-check-label" for="defaultCheck1">
                      Layanan Perbankan
        </label>
                  </th>

                </tr>
                <tr>
                  <th scope="row"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    <label class="form-check-label" for="defaultCheck1">
                      Internet Banking
        </label></th>
                </tr>
                <tr>
                  <th scope="row"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    <label class="form-check-label" for="defaultCheck1">
                      Mobile Banking
        </label></th>
                </tr>
                <tr>
                  <th scope="row"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    <label class="form-check-label" for="defaultCheck1">
                      Others
        </label></th>
                </tr>
              </tbody>
            </table>
          </div>



          <div class="col6">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" width="30" >No</th>
                  <th scope="col" width="150">Customer ID</th>
                  <th scope="col" width="200">Tiket Status</th>
                  <th scope="col" width="130">Time</th>
                  <th scope="col" width="70">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>111</td>
                  <td>On Progress</td>
                  <td>27/11/2020 16:32</td>
                  <td><Link to ="/lihattiket" type="button" class="btn btn-secondary">Open</Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>112</td>
                  <td>On Progress</td>
                  <td>27/11/2020 16:32</td>
                  <td><button type="button" class="btn btn-secondary">Open</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>113</td>
                  <td>Close</td>
                  <td>27/11/2020 16:32</td>
                  <td><button type="button" class="btn btn-secondary">Open</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}