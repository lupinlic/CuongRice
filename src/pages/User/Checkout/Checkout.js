import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Banner from '../../../components/shared/Banner/Banner'
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate();

    const handleToThanks = () => {
        // Điều hướng đến trang giỏ hàng
        navigate('/Thanks');
    }

    const [selectedPayment, setSelectedPayment] = useState(""); // Trạng thái lưu loại thanh toán

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value); // Cập nhật trạng thái khi chọn thanh toán
    };
    return (
        <div className='container-fluid bg-white'>
            <div className='container-fluid '>
                <Banner
                    textTitle='Thông tin đơn hàng'
                    textContent='Trang chủ/Thông tin đơn hàng'
                ></Banner>
            </div>
            <div className='container mt-3 address '>
                <div className='row'>
                    <div className='col-md-7'>
                        <h6>Thông tin giao hàng</h6>
                        <div className='row'>
                            <div className='col-md-7'>
                                <input type='text' placeholder='Họ và tên' style={{ width: '100%' }}></input>
                            </div>
                            <div className='col-md-5'>
                                <input type='text' placeholder='Số điện thoại' style={{ width: '100%' }}></input>
                            </div>
                        </div>
                        <input type='text' placeholder='Địa chỉ cụ thể' style={{ width: '100%' }}></input>
                        <div className='row'>
                            <div className='col-md-4 '>
                                <select className='w-100'>
                                    <option>Chọn tỉnh</option>
                                </select>
                            </div>
                            <div className='col-md-4'>
                                <select className='w-100'>
                                    <option>Chọn huyện</option>
                                </select>
                            </div>
                            <div className='col-md-4'>
                                <select className='w-100'>
                                    <option>Chọn xã</option>
                                </select>
                            </div>
                        </div>
                        <h6 className='mt-2 '>Phương thức vận chuyển</h6>
                        <div className='d-flex align-items-center justify-content-between p-2 mt-1' style={{ width: '100%', height: '45px', border: '1px solid #a4a4a4', borderRadius: '5px', color: '#a4a4a4' }}>
                            <p className='m-0'>Giao hàng tận nơi, Đơn dưới 1.500.000 thu phí ship</p>
                            <p className='m-0'>30.000đ</p>
                        </div>
                        <h6 className="mt-3">Phương thức thanh toán</h6>
                        <div style={{ border: '1px solid #a4a4a4', borderRadius: '5px' }}>
                            <div className="d-flex align-items-center p-2" style={{ borderBottom: '1px solid #a4a4a4' }}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="bank"
                                    checked={selectedPayment === "bank"}
                                    onChange={handlePaymentChange}
                                />
                                <label ><img style={{ margin: '0 12px' }} src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=6" />Thanh toán qua tài khoản ngân hàng</label>
                            </div>
                            {selectedPayment === "bank" && (
                                <div style={{ marginTop: "20px", textAlign: "center" }}>
                                    <img src="/qr.jpg" alt="QR Code" width="200" />
                                </div>
                            )}
                            <div className="d-flex align-items-center p-2 " style={{ borderTop: '1px solid #a4a4a4' }}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={selectedPayment === "cod"}
                                    onChange={handlePaymentChange}
                                />
                                <label><img style={{ margin: '0 12px' }} src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=6" />Thanh toán khi nhận hàng</label>

                            </div>
                            {selectedPayment === "cod" && (
                                <div className="text-center p-3 ">Chỉ áp dụng đơn hàng nhỏ hơn 3.000.000đ</div>
                            )}


                        </div>
                        <div className="d-md-flex d-none justify-content-between mt-3 align-items-center">
                            <Link>Giỏ hàng</Link>
                            <button onClick={handleToThanks} style={{ width: '200px', height: '50px', backgroundColor: 'green', color: '#fff', border: 'none' }}>Hoàn tất đơn hàng</button>
                        </div>

                    </div>
                    <div className='col-md-5 mt-2 ' style={{ paddingLeft: '64px' }}>
                        <div className="row align-items-center" style={{ borderBottom: '1px solid #a4a4a4' }}>
                            <div className="col-md-2">
                                <img style={{ width: '100%' }} src="https://product.hstatic.net/1000271724/product/upload_6988d367d0254e8e8252636ea14b4c04_large.jpg" />
                            </div>
                            <div className="col-md-8">
                                <p>Xoài cát</p>
                            </div>
                            <div className="col-md-2">
                                <p>50.000đ</p>
                            </div>
                        </div>
                        <div className="row align-items-center" style={{ borderBottom: '1px solid #a4a4a4', padding: '12px 0' }}>
                            <div className="col-md-8">
                                <input className="w-100" type="text" placeholder="Mã giảm giá"></input>
                            </div>
                            <div className="col-md-4">
                                <button className="w-100" style={{ height: '45px', borderRadius: '5px', borderColor: '#a4a4a4' }}>Sử dụng</button>
                            </div>
                        </div>
                        <div className="mt-2" style={{ borderBottom: '1px solid #a4a4a4', padding: '12px 0' }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Tạm tính</p>
                                <p>50.000đ</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Phí vận chuyển</p>
                                <p>30.000đ</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p style={{ fontSize: '20px' }}>Tổng cộng</p>
                            <p style={{ fontSize: '20px' }}>80.000đ</p>
                        </div>
                    </div>
                </div>
                <div className="d-md-none d-flex justify-content-between mt-3 align-items-center">
                    <Link>Giỏ hàng</Link>
                    <button onClick={handleToThanks} style={{ width: '200px', height: '50px', backgroundColor: 'green', color: '#fff', border: 'none' }}>Hoàn tất đơn hàng</button>
                </div>
            </div>
        </div>
    )
}


export default Checkout