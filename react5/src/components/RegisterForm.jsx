import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { addUserAction, updateUserAction } from "../store/actions/userAction";

class RegisterForm extends Component {
  usernameInputRef = createRef();
  emailInputRef = createRef();

  state = {
    id: "",
    fullname: "",
    number: "",
    email: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // let isValid = true;
    // isValid &= this.validateRequired(
    //   this.state.id,
    //   this.usernameInputRef.current,
    //   "Username không được bỏ trống"
    // );
    // isValid &=
    //   this.validateRequired(
    //     this.state.email,
    //     this.emailInputRef.current,
    //     "Email không được bỏ trống"
    //   ) &&
    //   this.validateRequired(
    //     this.state.email,
    //     this.emailInputRef.current,
    //     "Email không đúng định dạng"
    //   );
    // if (isValid) {
    //   if (this.state.id) {
    //     this.props.dispatch(updateUserAction(this.state));
    //   } else {
    //     this.props.dispatch(addUserAction(this.state));
    //   }
    // }

    console.log(this.state);
  };

  static getDervicedStateFromProps(nextProps, currentState) {
    if (
      nextProps.selectedUser &&
      nextProps.selectedUser.id !== currentState.id
    ) {
      currentState = nextProps.selectedUser;
    }
  }
  render() {
    return (
      <div className="card p-0">
        <div className="card-header bg-secondary text-white font-weight-bold">
          THÔNG TIN SINH VIÊN
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>MÃ SV</label>
                  <input
                    value={this.state.id}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="id"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Họ Tên</label>
                  <input
                    value={this.state.fullname}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="name"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Số Điện Thoại</label>
                  <input
                    value={this.state.number}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="number"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="email"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
            </div>
            <button className="btn btn-success mr-2">Thêm Sinh Viên</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // selectedUser: state.userReducer.selectedUser,
  };
};

export default connect(mapStateToProps)(RegisterForm);
