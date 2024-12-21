import React from 'react'

function Footer() {
    return (
        <footer className="footer bg-white text-center text-lg-start border-top mt-4" >
            <div className="container p-4">
                <div className="row">
                    {/* Cột 1 */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">CuongRICE</h5>
                        <p>
                            Chúng tôi cung cấp các sản phẩm chất lượng, đảm bảo sự hài lòng cho mọi khách hàng.
                        </p>
                    </div>

                    {/* Cột 2 */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Liên kết nhanh</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-dark">Trang chủ</a></li>
                            <li><a href="#!" className="text-dark">Sản phẩm</a></li>
                            <li><a href="#!" className="text-dark">Liên hệ</a></li>
                            <li><a href="#!" className="text-dark">Chính sách</a></li>
                        </ul>
                    </div>

                    {/* Cột 3 */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Liên hệ</h5>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-map-marker-alt me-2"></i> Ngõ 20 Tân Triều , Thanh Trì</li>
                            <li><i className="fas fa-phone me-2"></i> 0123-456-789</li>
                            <li><i className="fas fa-envelope me-2"></i> contact@cuongrice.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 border-top" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2024 CuongRICE. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer