import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Zalo from '../../../shared/Zalo/Zalo';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle trạng thái hiển thị khung
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Zalo />
            <div className='container' style={{ height: '100px' }}>
                <div className='row align-items-center h-100'>
                    <div className='col-md-4 d-flex align-items-center position-relative col-6'>
                        <img style={{ width: '60px', borderRadius: '50%' }} src='/cuong.png' />
                        <div className="logo d-flex">
                            <div className="letter">C</div>
                            <div className="letter">U</div>
                            <div className="letter">O</div>
                            <div className="letter">N</div>
                            <div className="letter">G</div>
                            <div className="letter">R</div>
                            <div className="letter">I</div>
                            <div className="letter">C</div>
                            <div className="letter">E</div>
                        </div>
                        <img src='https://free.vector6.com/wp-content/uploads/2021/05/PNG-0000002212-png-bong-lua.png' className='lua d-md-block d-none' />

                    </div>
                    <div className='col-6 d-block d-md-none text-end'>
                        <i
                            className="fas fa-bars"
                            style={{ fontSize: "24px", cursor: "pointer" }}
                            onClick={toggleMenu} // Gắn sự kiện click
                        ></i>
                        {isOpen && (
                            <div
                                className="popup-menu"
                                style={{
                                    position: "absolute",
                                    top: "50px", // Đặt vị trí khung dưới icon
                                    right: "10px", // Căn phải
                                    background: "#fff",
                                    border: "1px solid #ddd",
                                    borderRadius: "5px",
                                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    padding: "10px",
                                    zIndex: 1000,
                                    width: '150px'
                                }}
                            >
                                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                                    <li>Xin chào Lâm!</li>
                                    <li style={{ padding: "8px 0", cursor: "pointer" }}>
                                        <span><Link to='/Cart'>Giỏ hàng</Link></span>
                                        <span style={{ borderRadius: '50%', backgroundColor: 'red', color: '#fff', marginLeft: '8px' }}>1</span>
                                    </li>
                                    <li style={{ padding: "8px 0", cursor: "pointer" }}><Link>Hồ sơ</Link></li>
                                    <li style={{ padding: "8px 0", cursor: "pointer" }}><Link>Đăng xuất</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='col-md-6'>
                        <ul className="list-inline d-flex justify-content-between m-lg-0 mt-2">
                            <li className='list-inline-item'>
                                <NavLink to="/Introduce" className='d-none d-md-block'>Giới thiệu về CuongRICE </NavLink>
                                <NavLink to="/Introduce" className='d-block d-md-none'>Giới thiệu</NavLink>
                            </li>
                            <li className='list-inline-item'>
                                <NavLink to="/">Trang chủ</NavLink>
                            </li>
                            <li className='list-inline-item product user-container'>
                                <NavLink to="/Product">Sản phẩm</NavLink>
                                <div className="user-box">
                                    <ul>
                                        <li><Link to='#'>Gạo</Link></li>
                                        <li><Link to='#'>Rau củ, quả</Link></li>
                                        <li><Link to=''>Combo</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <NavLink to="/Contact">Liên hệ</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-2 row d-none d-md-flex'>

                        <div className='col-md-6 text-end search-container'>
                            <i style={{ fontSize: '20px', color: '#828282' }} class="fas fa-search icon"></i>
                            <div class="search-box">
                                <input type="text" placeholder="Tìm kiếm..." />
                                <button class="search-button">Tìm</button>
                            </div>
                        </div>
                        <div className="position-relative col-md-4">
                            <Link to='/Cart'>
                                <i className="fas fa-shopping-cart fa-2x icon" style={{ fontSize: '20px', color: '#828282' }} />
                                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
                                    3
                                    <span className="visually-hidden">số lượng sản phẩm</span>
                                </span>
                            </Link>
                        </div>
                        <div className='col-md-2 user-container'>
                            <i style={{ fontSize: '20px', color: '#828282' }} class="fas fa-user icon"></i>
                            <div className="user-box">
                                <p>Chào mừng bạn!</p>
                                <ul>
                                    <li><a href="">Hồ sơ</a></li>
                                    <li><a href="">Cài đặt</a></li>
                                    <li><a href="">Đăng xuất</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header