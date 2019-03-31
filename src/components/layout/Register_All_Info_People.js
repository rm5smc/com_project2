import React, { Component } from 'react';

class Register_All_Info_People extends Component {
  render() {
    return (
      <form className="form">
              <h3 className="form__title">THÔNG TIN CÁ NHÂN</h3>
              <div className="form-tit"><label>Tên trước<span className="upper-text">*</span></label><input /></div>
              <div className="form-tit"><label>Email<span className="upper-text">*</span></label><input /></div>
              <div className="form-tit"><label>Password<span className="upper-text">*</span></label><input /></div>
              <p className="p-tit">Đăng ký nhận bảng tin</p>
            </form>
    );
  }
}

export default Register_All_Info_People;