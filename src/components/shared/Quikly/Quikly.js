import { Link } from 'react-router-dom';
import { useState } from 'react';
const Quikly = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 2000); // Đợi 2s để hiển thị hiệu ứng ẩn trước khi gọi onClose
    };
    return (
        <div className=''>
            <div className={`p-0 form-popup ${isVisible ? "slide-in" : "slide-out"}`} onClick={handleClose}>
                <button onClick={onClose} style={{ height: '30px', width: '30px', borderRadius: '50%', position: 'absolute', top: '-2%', right: '-2%', zIndex: '1' }}>X</button>
                <div className="modal-content d-flex align-items-center" style={{ backgroundColor: 'green', color: '#fff' }}>
                    <p className='p-1 m-0'>THÔNG TIN SẢN PHẨM</p>
                </div>
                <div className='row p-2'>
                    <div className='col-md-6'>
                        <img src='https://product.hstatic.net/1000271724/product/upload_6988d367d0254e8e8252636ea14b4c04_large.jpg' style={{ width: '90%' }} />

                    </div>
                    <div className='col-md-6 detail'>
                        <p style={{ fontSize: '18px' }}>Xoài cát</p>
                        <p style={{ color: '#037918' }}>50.000đ</p>
                        <div className='d-flex align-items-center ju' style={{ borderBottom: '1px solid #969494', borderTop: '1px solid #969494', height: '40px' }}>
                            <p className='m-0'>Tại Cường Food : </p>
                            <Link to='/' style={{ color: 'green' }}>Liên hệ</Link>
                        </div>
                        <p style={{ fontSize: '14px' }}>Giá trị dinh dưỡng:   Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức.
                            Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...
                        </p>
                        <div className='d-flex' style={{ width: '100px', backgroundColor: '#888', height: '30px' }}>
                            <button className='border-0' style={{ width: '50px' }}>-</button>
                            <input className='w-100 border-0' type="number"
                                value={quantity}
                                readOnly></input>
                            <button className='border-0' style={{ width: '50px' }}>+</button>
                        </div>
                        <button style={{ width: '150px', backgroundColor: 'green', height: '40px', color: '#fff', border: 'none', borderRadius: '20px', marginTop: '16px' }}>Thêm vào giỏ hàng</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Quikly