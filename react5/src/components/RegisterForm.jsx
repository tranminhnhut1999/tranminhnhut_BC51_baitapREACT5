import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { addUserAction, updateUserAction } from "../store/actions/userAction";

class RegisterForm extends Component {
  idInputRef = createRef();
  fullNameInputRef = createRef();
  numberInputRef = createRef();
  emailInputRef = createRef();

  state = {
    id: "",
    fullName: "",
    number: "",
    email: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  //VALIDATE
  validateRequired = (value, ref, mess) => {
    if (value) {
      ref.innerHTML = "";
      return true;
    }
    ref.innerHTML = mess;
    return false;
  };
  // CHECK ĐỊNH DẠNG VALIDATE
  validateNumber = (value, ref, mess) => {
    if (/^[0-9]+$/.test(value)) {
      ref.innerHTML = "";

      return true;
    }
    ref.innerHTML = mess;
    return false;
  };

  validateEmail = (value, ref, message) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      ref.innerHTML = "";

      return true;
    }

    ref.innerHTML = message;

    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    isValid &= this.validateRequired(
      this.state.id,
      this.idInputRef.current,
      "Mã SV không được bỏ trống"
    );
    isValid &= this.validateRequired(
      this.state.fullName,
      this.fullNameInputRef.current,
      "Username không được bỏ trống"
    );
    isValid &=
      this.validateRequired(
        this.state.number,
        this.numberInputRef.current,
        "Số điện thoại không được bỏ trống"
      ) &&
      this.validateNumber(
        this.state.number,
        this.numberInputRef.current,
        "Số điện thoại phải là số"
      );
    isValid &=
      this.validateRequired(
        this.state.email,
        this.emailInputRef.current,
        "Email không được bỏ trống"
      ) &&
      this.validateEmail(
        this.state.email,
        this.emailInputRef.current,
        "Email không đúng định dạng"
      );
    if (isValid) {
      // if (this.state.id) {
      //   this.props.dispatch(updateUserAction(this.state));
      // } else {
      this.props.dispatch(addUserAction(this.state));
      // }
    }

    //console.log(this.state);
  };

  static getDerivedStateFromProps(nextProps, currentState) {
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
                  <span ref={this.idInputRef} className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Họ Tên</label>
                  <input
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="fullName"
                  />
                  <span
                    ref={this.fullNameInputRef}
                    className="text-danger"
                  ></span>
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
                  <span
                    ref={this.numberInputRef}
                    className="text-danger"
                  ></span>
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
                  <span ref={this.emailInputRef} className="text-danger"></span>
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
    selectedUser: state.userReducer.selectedUser,
  };
};

export default connect()(RegisterForm);
