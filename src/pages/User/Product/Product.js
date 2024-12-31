import React, { useState } from "react";
import Banner from '../../../components/shared/Banner/Banner'
import Line from '../../../components/shared/Line/Line'
import Category from '../../../components/shared/Category/Category'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Quikly from '../../../components/shared/Quikly/Quikly';
function Product() {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        // Điều hướng đến trang giỏ hàng
        navigate('/Cart');
    }
    const [isFormVisible, setIsFormVisible] = useState(false);
    const openForm = () => {
        setIsFormVisible(true);
    };

    // Đóng form
    const closeForm = () => {
        setIsFormVisible(false);
    };
    return (
        <div>
            {isFormVisible && (
                <>
                    <div className="overlay1"></div> {/* Lớp overlay */}
                    <Quikly onClose={closeForm} /> {/* Form */}
                </>
            )}
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
                            <div className="mt-2 p-2 mb-2" style={{ border: '1px solid #c5c5c5' }}>
                                <div className="pt-1 check">
                                    <input type="checkbox" ></input>
                                    <label >Dưới 100.000đ</label>
                                </div>
                                <div className="pt-1 check">
                                    <input type="checkbox"></input>
                                    <label>100.000đ - 300.000đ</label>
                                </div>
                                <div className="pt-1 check">
                                    <input type="checkbox"></input>
                                    <label>300.000đ - 500.000đ</label>
                                </div>
                                <div className="pt-1 check">
                                    <input type="checkbox"></input>
                                    <label>500.000đ - 1.000.000đ</label>
                                </div>
                                <div className="pt-1 check">
                                    <input type="checkbox"></input>
                                    <label>Trên 1.000.000đ</label>
                                </div>
                            </div>
                            <Line
                                textTitle='KHUYẾN MÃI'
                            ></Line>
                            <div className="mt-2 km" style={{ height: '330px', width: '100%' }}>
                                <img className="w-100" src="https://theme.hstatic.net/1000271724/1000376256/14/banner_sidebar.jpg?v=88" />
                            </div>

                        </div>
                        <div className='col-md-10'>
                            <img className="d-none d-md-block" src='https://theme.hstatic.net/1000271724/1000376256/14/banner_collection.jpg?v=88' style={{ width: '100%' }} />
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
                                <div className='col-md-4 '>
                                    <div className=' w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-white new-child product-card'>
                                        <img src='https://product.hstatic.net/1000271724/product/upload_6988d367d0254e8e8252636ea14b4c04_large.jpg' className='w-100' />
                                        <div className="hover-actions ">
                                            <button title='Thêm vào giỏ hàng' onClick={handleAddToCart} style={{ borderRadius: '30px', backgroundColor: '#037918', color: '#fff', border: 'none', width: '120px', height: '30px', marginRight: '8px' }}>Thêm vào giỏ</button>
                                            <button className="d-none d-md-block" title='Xem nhanh' onClick={() => openForm()} style={{ borderRadius: '50%', backgroundColor: '#037918', color: '#fff', border: 'none', height: '30px', width: '30px', margin: '0 8px' }}><i class="fas fa-search "></i></button>

                                            <Link to='/Product_details'><button title='Xem chi tiết' style={{ borderRadius: '50%', backgroundColor: '#037918', color: '#fff', border: 'none', height: '30px', width: '30px', marginLeft: '8px' }}><i class="fas fa-eye"></i></button></Link>
                                        </div>
                                        <p>Sườn non</p>
                                        <p style={{ color: '#037918' }}>50.000đ</p>
                                    </div>
                                </div>
                                <div className='col-md-4 '>
                                    <div className=' w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-white new-child product-card'>
                                        <img src='https://product.hstatic.net/1000271724/product/upload_fdd84c27439a406680b755a4051d1093_large.jpg' className='w-100' />
                                        <div className="hover-actions">
                                            <button title='Thêm vào giỏ hàng' onClick={handleAddToCart} style={{ borderRadius: '30px', backgroundColor: '#037918', color: '#fff', border: 'none', width: '120px', height: '30px', marginRight: '8px' }}>Thêm vào giỏ</button>
                                            <button title='Xem nhanh' style={{ borderRadius: '50%', backgroundColor: '#037918', color: '#fff', border: 'none', height: '30px', width: '30px', margin: '0 8px' }}><i class="fas fa-search "></i></button>
                                            <button title='Xem chi tiết' style={{ borderRadius: '50%', backgroundColor: '#037918', color: '#fff', border: 'none', height: '30px', width: '30px', marginLeft: '8px' }}><i class="fas fa-eye"></i></button>
                                        </div>
                                        <p>Xu xu non</p>
                                        <p style={{ color: '#037918' }}>50.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product