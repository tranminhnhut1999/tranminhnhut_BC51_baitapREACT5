import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteUserAction,
  setSelectedUserAction,
} from "../store/actions/userAction";

class UserManagement extends Component {
  state = {
    keyWord: "",
  };

  renderContent = () => {
    let data = this.props.userList.filter((element) => {
      return (
        element.fullName
          .toLowerCase()
          .indexOf(this.state.keyWord.toLowerCase()) !== -1
      );
    });

    return data.map((element, idx) => {
      const className = idx % 2 === 0 ? "bg-light" : "";

      return (
        <tr key={element.id} className={className}>
          <td>{element.id}</td>
          <td>{element.fullName}</td>
          <td>{element.number}</td>
          <td>{element.email}</td>
          <td>
            <button
              onClick={() =>
                this.props.dispatch(setSelectedUserAction(element))
              }
              className="btn btn-info mr-2"
            >
              EDIT
            </button>
            <button
              onClick={() => this.props.dispatch(deleteUserAction(element))}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  handleChange = (e) => {
    this.setState({ keyWord: e.target.value });
  };
  render() {
    return (
      <div className="card p-0 mt-3">
        <div className="card-header font-weight-bold">QUẢN LÝ MÃ SINH VIÊN</div>
        <div className="row mt-4 px-3 ">
          <div className="col-4">
            <div className="form-group mb-0">
              <input
                onChange={this.handleChange}
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
    userList: state.userReducer.userList,
  };
};

export default connect(mapStateToProps)(UserManagement);
