import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className='container' style={{ height: '100px' }}>
                <div className='row align-items-center h-100'>
                    <div className='col-md-4 d-flex align-items-center position-relative'>
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
                        <img src='https://free.vector6.com/wp-content/uploads/2021/05/PNG-0000002212-png-bong-lua.png' className='lua' />

                    </div>
                    <div className='col-md-6'>
                        <ul className="list-inline d-flex justify-content-between m-0">
                            <li className='list-inline-item'>
                                <NavLink to="/Introduce">Giới thiệu về CuongRICE </NavLink>
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
                                <NavLink to="/Blog">Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-2 row'>

                        <div className='col-md-6 text-end search-container'>
                            <i style={{ fontSize: '20px', color: '#828282' }} class="fas fa-search icon"></i>
                            <div class="search-box">
                                <input type="text" placeholder="Tìm kiếm..." />
                                <button class="search-button">Tìm</button>
                            </div>
                        </div>
                        <div className="position-relative col-md-4">
                            <i className="fas fa-shopping-cart fa-2x icon" style={{ fontSize: '20px', color: '#828282' }} />
                            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
                                3
                                <span className="visually-hidden">số lượng sản phẩm</span>
                            </span>
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