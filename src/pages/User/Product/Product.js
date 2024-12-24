import React from 'react'
import Banner from '../../../components/shared/Banner/Banner'
import Line from '../../../components/shared/Line/Line'
import Category from '../../../components/shared/Category/Category'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Product() {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        // Điều hướng đến trang giỏ hàng
        navigate('/');
    }
    return (
        <div>
            <div className='container-fluid '>
                <Banner
                    textTitle='Tất cả sản phẩm'
                    textContent='Trang chủ/ Sản phẩm'
                ></Banner>
            </div>
            <div className='container-fluid bg-white'>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <Line
                                textTitle='DANH MỤC'
                            ></Line>
                            <Category></Category>
                            <Line
                                textTitle='LỌC SẢN PHẨM'
                            ></Line>
                        </div>
                        <div className='col-md-10'>
                            <img src='https://theme.hstatic.net/1000271724/1000376256/14/banner_collection.jpg?v=88' style={{ width: '100%' }} />
                            <div className='row mt-3'>
                                <div className='col-md-8'>
                                    <h5>Tất cả sản phẩm</h5>
                                </div>
                                <div className='col-md-4 d-flex'>
                                    <p>Sắp xếp theo:</p>
                                    <select style={{ width: '70%', height: '30px' }}>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            {/* sản phẩm */}
                            <div className='row'>
                                <div className='col-md-4  p-2' style={{ height: '450px' }}>

                                    <div className=' w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-white new-child product-card'>

                                        <img src='https://product.hstatic.net/1000271724/product/upload_3e8ae0c37762469d9d10039a0ca29c25_large.jpg' className='w-100' />

                                        <div className="hover-actions ">
                                            <button title='Thêm vào giỏ hàng' onClick={handleAddToCart} style={{ borderRadius: '30px', backgroundColor: '#037918', color: '#fff', border: 'none', width: '120px', height: '30px', marginRight: '8px' }}>Thêm vào giỏ</button>
                                            <button title='Xem nhanh' style={{ borderRadius: '50%', backgroundColor: '#037918', color: '#fff', border: 'none', height: '30px', width: '30px', margin: '0 8px' }}><i class="fas fa-search "></i></button>
                                            <button title='Xem chi tiết' style={{ borderRadius: '50%', backgroundColor: '#037918', color: '#fff', border: 'none', height: '30px', width: '30px', marginLeft: '8px' }}><i class="fas fa-eye"></i></button>
                                        </div>


                                        <p>Xương ống heo</p>
                                        <p style={{ color: '#037918' }}>50.000đ</p>
                                    </div>

                                </div>
                                <div className='col-md-4 '></div>
                                <div className='col-md-4 '></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product