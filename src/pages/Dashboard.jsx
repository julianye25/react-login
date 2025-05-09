import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <>
      <div className="conatiner">
        <div class="row justify-content-around">
          <div className="col-sm-6">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link">
                  <span className="btn btn-danger" onClick={onLogout}>
                    Cerrar sesion
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <h1 className="text-primary m-2">Bienvenido {user}</h1>
      </div>
    </>
  );
}

export default Dashboard;
