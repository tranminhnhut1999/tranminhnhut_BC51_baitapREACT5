import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteUserAction,
  setSelectedUserAction,
} from "../store/actions/userAction";

class UserManagement extends Component {
  state = {
    keyord: "",
  };
  renderContent = () => {
    return (
      <>
        <tr className="bg-light">
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>09381111111</td>
          <td>nguyenvana@gmail.com</td>
          <td>
            <button className="btn btn-info mr-2">EDIT</button>
            <button className="btn btn-danger">DELETE</button>
          </td>
        </tr>
        <tr className="bg-light">
          <td>2</td>
          <td>Nguyễn Văn B</td>
          <td>092822232232</td>
          <td>nguyenvanb@gmail.com</td>
          <td>
            <button className="btn btn-info mr-2">EDIT</button>
            <button className="btn btn-danger">DELETE</button>
          </td>
        </tr>
      </>
    );
  };
  render() {
    return (
      <div className="card p-0 mt-3">
        <div className="card-header font-weight-bold">QUẢN LÝ MÃ SINH VIÊN</div>
        <div className="row mt-4 px-3 ">
          <div className="col-4">
            <div className="form-group mb-0">
              <input
                type="text"
                placeholder="Search by full name..."
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table bg-secondary">
            <thead>
              <tr>
                <th>Mã SV</th>
                <th>Họ Tên</th>
                <th>Số Điện Thoại</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody> {this.renderContent()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // userlist: state.userReducer.userlist,
  };
};

export default connect(mapStateToProps)(UserManagement);
