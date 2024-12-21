import React from 'react'
import { Link } from 'react-router-dom';

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
                        <ul className="list-inline d-flex justify-content-between">
                            <li className='list-inline-item'>
                                <Link to="/Introduce">Giới thiệu về CuongRICE </Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li className='list-inline-item product'>
                                <Link to="/Product">Sản phẩm</Link>
                                <ul className='list-group position-absolute product-item z-1'>
                                    <li className='list-group-item'>
                                        <Link to='#'>Gạo</Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link to='#'>Rau củ, quả</Link>
                                    </li>
                                    <li className='list-group-item'>
                                        <Link to='#'>Combo</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="#">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-2 row'>
                        <div className='col-md-6'></div>
                        <div className="position-relative col-md-3">
                            <i className="fas fa-shopping-cart fa-2x" style={{ fontSize: '20px', color: '#828282' }} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                3
                                <span className="visually-hidden">số lượng sản phẩm</span>
                            </span>
                        </div>
                        <div className='col-md-3'>
                            <i style={{ fontSize: '20px', color: '#828282', marginLeft: '40px' }} class="fas fa-user fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header