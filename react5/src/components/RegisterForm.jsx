import React, { Component } from "react";

export default class RegisterForm extends Component {
  render() {
    return (
      <div className="card p-0">
        <div className="card-header bg-secondary text-white font-weight-bold">
          THÔNG TIN SINH VIÊN
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>MÃ SV</label>
                  <input type="text" className="form-control" />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Họ Tên</label>
                  <input type="text" className="form-control" />
                  <span className="text-danger"></span>
                </div>
              </div>
              {/* <div className="col-6">
                <div className="form-group">
                  <label>Password</label>
                  <input type="text" className="form-control" />
                  <span className="text-danger"></span>
                </div>
              </div> */}
              <div className="col-6">
                <div className="form-group">
                  <label>Số Điện Thoại</label>
                  <input type="text" className="form-control" />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" />
                  <span className="text-danger"></span>
                </div>
              </div>
              {/* <div className="col-6">
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control">
                    <option>Client</option>
                    <option>Admin</option>
                  </select>
                  <span className="text-danger"></span>
                </div>
              </div> */}
            </div>

            <button className="btn btn-success mr-2">Thêm Sinh Viên</button>
            {/* <button className="btn btn-outline-dark">RESET</button> */}
          </form>
        </div>
      </div>
    );
  }
}
