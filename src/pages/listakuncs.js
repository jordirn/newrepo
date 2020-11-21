import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function ListAkunCs() {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#" >Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to ="/listtiketspv" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></Link>
            <a class="nav-link" href="#">History</a>
            <a class="nav-link" href="#">Regist CS</a>
            <Link to ="/" class="nav-item nav-link active">Logout <span class="sr-only">(current)</span></Link>
          </div>
        </div>
      </nav>

      <div class="col6">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col" width="30" >No</th>
              <th scope="col" width="200">ID CS</th>
              <th scope="col" width="200">Nama CS</th>
              <th scope="col" width="200">Status</th>
              <th scope="col" width="200">Rating</th>
              <th scope="col" width="200">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>111</td>
              <td>CS1</td>
              <td>Active</td>
              <td></td>
              <td><button type="button" class="btn btn-secondary">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>112</td>
              <td>CS1</td>
              <td>Active</td>
              <td></td>
              <td><button type="button" class="btn btn-secondary">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>113</td>
              <td>CS1</td>
              <td>Active</td>
              <td></td>
              <td><button type="button" class="btn btn-secondary">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}
