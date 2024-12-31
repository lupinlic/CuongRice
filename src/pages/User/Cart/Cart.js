import React from 'react'
import Banner from '../../../components/shared/Banner/Banner'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Cart() {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleToCheckout = () => {
        // Điều hướng đến trang giỏ hàng
        navigate('/Checkout');
    }
    return (
        <div className='container-fluid  bg-white'>
            <div className='container-fluid '>
                <Banner
                    textTitle='Giỏ hàng'
                    textContent='Trang chủ/ Giỏ hàng'
                ></Banner>
            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-8 pt-3'>
                        <table className="table table-striped w-100 tb_cart">
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th></th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        <img src='https://product.hstatic.net/1000271724/product/upload_6988d367d0254e8e8252636ea14b4c04_large.jpg' />
                                    </td>
                                    <td>Xoài cát</td>
                                    <td>50.000đ</td>
                                    <td>
                                        <div className='d-flex' style={{ width: '100px', backgroundColor: '#888', height: '30px' }}>
                                            <button className='border-0' style={{ width: '50px' }}>-</button>
                                            <input className='w-100 border-0' type="number"
                                                value={quantity}
                                                readOnly></input>
                                            <button className='border-0' style={{ width: '50px' }}>+</button>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td><i className="fas fa-trash "></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-md-4'>
                        <div className='mb-2' style={{ height: '50px', textAlign: 'right', fontSize: '20px', borderBottom: '1px solid #969796', paddingBottom: '12px' }}>
                            <p className=''>Tổng đơn hàng</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <p>Tổng phụ: </p>
                            <p>50.000đ</p>

                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <p>Thuế: </p>
                            <p>0</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between' style={{ height: '50px', borderTop: '1px solid #969796', paddingTop: '12px' }}>
                            <h6>Tổng: </h6>
                            <p>50.000đ</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <p></p>
                            <button onClick={handleToCheckout} style={{ width: '200px', height: '50px', backgroundColor: 'green', color: '#fff', border: 'none' }}>Tiến hành đặt hàng</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cart