import React, { Component } from 'react';

class Login_All_Form extends Component {
  render() {
    return (
      <form className="form">
            <div className="form__all">
              <h3 className="form__title">Khách hàng đăng ký</h3>
              <p>Nếu bạn có 1 tài khoản,vui lòng đăng nhập</p>
              <div className="form-tit"><label>Địa chỉ email<span className="icos-txt">*</span></label><input /></div>
              <div className="form-tit"><label>Password<span className="icos-txt">*</span></label><input /></div>
              <div className="form-tit form-tit__btn"><a>Quên mật khẩu ?</a><button>Đăng nhập</button></div>
            </div>
          </form>
    );
  }
}

export default Login_All_Form;