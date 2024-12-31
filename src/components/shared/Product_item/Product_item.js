import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Quikly from '../../../components/shared/Quikly/Quikly';
import { useState } from 'react';
const Product_item = ({ productImg, productName, productPrice }) => {
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
            <div className=' w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-white new-child product-card'>
                <img src={productImg} className='w-100' />
                <div className="hover-actions ">
                    <button title='Thêm vào giỏ hàng' onClick={handleAddToCart} style={{ borderRadius: '30px', backgroundColor: '#037918', color: '#fff', border: 'none', width: '120px', height: '30px', marginRight: '8px' }}>Thêm vào giỏ</button>
                    <button className='d-none d-md-block' title='Xem nhanh' onClick={() => openForm()} style={{ borderRadius: '50%', backgroundColor: '#037918', color: '#fff', border: 'none', height: '30px', width: '30px', margin: '0 8px' }}><i class="fas fa-search "></i></button>

                    <Link to='/Product_details'><button title='Xem chi tiết' style={{ borderRadius: '50%', backgroundColor: '#037918', color: '#fff', border: 'none', height: '30px', width: '30px', marginLeft: '8px' }}><i class="fas fa-eye"></i></button></Link>
                </div>
                <p>{productName}</p>
                <p style={{ color: '#037918' }}>{productPrice}</p>
            </div>
        </div>
    )
}

export default Product_item