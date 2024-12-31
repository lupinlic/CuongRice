import { Link } from "react-router-dom"
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <div className="category">
            <ul>
                <li><NavLink to='/' activeClassName="active">Trang chủ</NavLink></li>
                <li><NavLink to='/Product' activeClassName="active">Sản phẩm</NavLink>
                    <ul>
                        <li><Link>Gạo</Link></li>
                        <li><Link>Rau củ, quả</Link></li>
                        <li><Link>Combo</Link></li>
                    </ul>

                </li>
                <li><NavLink to='/Contact' activeClassName="active">Liên hệ</NavLink></li>
                <li><NavLink to='/Introduce' activeClassName="active">Giới thiệu</NavLink></li>
            </ul>
        </div>
    )
}
export default Category