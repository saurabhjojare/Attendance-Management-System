import React from 'react';

const Attendance = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Saurabh Jojare</h1>
          <h5>Username: <span class = "fw-light">saurabhjojare</span></h5>
          <h5>Email: <span class = "fw-light">saurabh.jojare@gmail.com</span></h5>
          <h5>Phone: <span class = "fw-light">+917083900700</span></h5><br></br>
          <button className="btn btn-primary btn-lg" type="button">Mark Attendance</button>
        </div>
      </div>
    );
};

export default Attendance;
