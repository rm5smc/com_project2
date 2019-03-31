import React, { Component } from 'react';

class Register_All_Info_Login extends Component {
  render() {
    return (
      <form className="form">
              <h3 className="form__title">THÔNG TIN ĐĂNG NHẬP</h3>
              <div className="form-tit"><label>Mật khẩu<span className="upper-text">*</span></label><input /></div>
              <div className="form-tit"><label>Xác nhận mật khẩu<span className="upper-text">*</span></label><input /></div>
              <div className="form-tit form-tit__btn"><button>Gửi</button><button className="btn__select"><i className="fa fa-undo" />Quay
                  lại</button></div>
            </form>
    );
  }
}

export default Register_All_Info_Login;