import React from 'react'
import Banner from '../../../components/shared/Banner/Banner'
import Line from '../../../components/shared/Line/Line'
import Category from '../../../components/shared/Category/Category'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Product_item from '../../../components/shared/Product_item/Product_item';

function Product_details() {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className='bg-white'>
            <div className='container-fluid '>
                <Banner
                    textTitle='Sản phẩm'
                    textContent='Trang chủ/ Sản phẩm'
                ></Banner>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src='https://product.hstatic.net/1000271724/product/upload_6988d367d0254e8e8252636ea14b4c04_large.jpg' className='w-100' />
                            </div>
                            <div className='col-md-6 p-3'>
                                <p style={{ fontSize: '20px' }}>Xoài cát</p>
                                <p style={{ color: '#037918' }}>50.000đ</p>
                                <div className='d-flex align-items-center ju' style={{ borderBottom: '1px solid #969494', borderTop: '1px solid #969494', height: '40px' }}>
                                    <p className='m-0'>Tại Cường Food : </p>
                                    <Link to='/' style={{ color: 'green' }}>Liên hệ</Link>
                                </div>
                                <p style={{ fontSize: '14px', paddingTop: '8px' }}>Giá trị dinh dưỡng:   Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức.
                                    Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...
                                </p>
                                <div className='d-flex' style={{ width: '100px', backgroundColor: '#888', height: '30px' }}>
                                    <button className='border-0' style={{ width: '50px' }}>-</button>
                                    <input className='w-100 border-0' type="number"
                                        value={quantity}
                                        readOnly></input>
                                    <button className='border-0' style={{ width: '50px' }}>+</button>
                                </div>
                                <button style={{ width: '150px', backgroundColor: 'green', height: '40px', color: '#fff', border: 'none', borderRadius: '20px', marginTop: '24px' }}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                        <div style={{ color: 'green' }}>
                            <Line
                                textTitle='CHI TIẾT SẢN PHẨM'
                            ></Line>
                        </div>
                        <div>
                            <p className='mt-2'>Giá trị dinh dưỡng:   Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức.
                                Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...</p>
                            <p>
                                Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,
                                Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Sản phẩm khuyến mãi, Trang chủ,
                            </p>
                        </div>

                    </div>
                    <div className='col-md-2'>
                        <Line
                            textTitle='DANH MỤC'
                        ></Line>
                        <Category></Category>
                        <Line
                            textTitle='KHUYẾN MÃI'
                        ></Line>
                        <div className="mt-2 km" style={{ height: '330px', width: '100%' }}>
                            <img className="w-100" src="https://theme.hstatic.net/1000271724/1000376256/14/banner_sidebar.jpg?v=88" />
                        </div>
                    </div>
                </div>
                {/* sp liên quan */}
                <div style={{ borderTop: '2px solid green', width: '100%', height: '32px' }}>
                    <div style={{ backgroundColor: 'green', width: '200px', height: '30px', textAlign: 'center', color: '#fff' }}>SẢN PHẨM LIÊN QUAN</div>
                </div>
                <div className='mt-3 row'>
                    <div className='col-md-3'>
                        <Product_item
                            productImg='https://product.hstatic.net/1000271724/product/upload_6988d367d0254e8e8252636ea14b4c04_large.jpg'
                            productName='Xoài cát'
                            productPrice='50.000đ'
                        ></Product_item>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product_details