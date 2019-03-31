import React, { Component } from 'react';
import Menu_Products from './Menu_Products';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About_Us from '../home/About_Us';
import Home from '../home/Home';

class Menu extends Component {
  render() {
    return (
     
        <div>
          <ul className="header__prim">
            <li>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li>
              <Link to="/about_us">GIỚI THIỆU</Link>
            </li>
            <Menu_Products />
            <li>
              <Link to="/news">TIN TỨC</Link>
            </li>
            <li>
              <Link to="/map">BẢN ĐỒ</Link>
              
            </li>
            <li>
              <Link to="/login">ĐĂNG NHẬP</Link>
             
            </li>
          </ul>

          


        </div>
     

    );
  }
}

export default Menu;